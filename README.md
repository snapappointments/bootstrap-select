bootstrap-select-ajax
================

Notice: This package is forked from [silviomoreto/bootstrap-select](https://github.com/silviomoreto/bootstrap-select). I just modify a little code for ajax(at line 1426 in js/boostrap-select-ajax.js).And i add a stamp. 

## ajax 
```html
<select class="ajax-search" ajax-url="xxx" ajax-params="{#wmsType#: #all#}" ajax-option-name="wmsName" ajax-option-value="id" ajax-search-key="searchkey" default-data="{#wmsName#: #test1#, #id#: #1#}"></select>
<!--ajax-url: string
ajax-params: like json,but use '#' instead '"'
ajax-option-name: Appoint your option name, the key of your response data
ajax-option-value: Appoint your option value, the key of your response data
default-data: like json ,use '#' instead '"', corresponding ajax-option-name and ajax-option-value
-->

<!--example:-->
<!--the data: [{"name": "xiaoming", "age": 28},{"name": "xiaohong", "age": 28}]-->
<!--<select class="ajax-search" ajax-url="your ajax api" ajax-params="{#pnType#: #onePart#, #fromSys#: #scmship#}" ajax-option-name="name" ajax-option-value="age"></select>-->

```

```javascript
  /*
  * 异步搜索下拉框
  */
  (function () {
    if (!$('select.ajax-search').hasClass('ajax-search')) {
      return;
    }

    $('select.ajax-search').selectpicker({
      liveSearch: true,
      size: 10,
      container: 'body',
      liveSearchPlaceholder: '输入搜索',
      noneSelectedText: '输入搜索',
    });

    // clear select options
    function _refreshSelectPicker($obj, str) {
      if (str) {
        $obj.html(str).selectpicker('refresh');
        return;
      }
      $obj.html(' ').selectpicker('refresh');
    }

    // to json
    function _toJson(str) {
      if (str) {
        return JSON.parse(str.replace(/#/g, '"'));
      }
      return false;
    }

    // creat select options
    function _creatOptions(data, optionName, optionValue) {
      if(data && data.length > 0){
        var options = '';
        for (var index = 0; index < data.length; index++) {
          var name = data[index][optionName];
          options += '<option value="' + data[index][optionValue] + '">' + name + '</option>';
        }
        return options;
      }
    }

    // set default select value
    for (var i = 0; i < $('select.ajax-search').length; i++) {
      var $item = $($('select.ajax-search')[i]);
      var data = _toJson($item.attr('default-data'));
      if (data) {
        $item.html(_creatOptions([data], $item.attr('ajax-option-name'), $item.attr('ajax-option-value')));
      }
    }

    // bind keyup event
    $(document)
      .on('keyup', '.bootstrap-select.open.ajax-search .bs-searchbox>input', function (e) {
        var stamp = $(this).parents('.bootstrap-select.ajax-search.open').attr('selectpicker-stamp');
        var $select = $('[selectpicker-stamp="' + stamp + '"]').find('select');
        var api = $select.attr('ajax-url');
        var params = {};
        if ($select.attr('ajax-params')) {
          params = _toJson($select.attr('ajax-params'));
        }
        var optionName = $select.attr('ajax-option-name');
        var optionValue = $select.attr('ajax-option-value');
        params[$select.attr('ajax-search-key')] = $('.bootstrap-select.ajax-search.open').find('input').val();
        if (event.key === 'Control') {
          return;
        }
        if ($(this).val()) {
          // open loading code
          // ajax
          $.get(api, params)
            .done(function (res) {
              if (!res.status) { // response success
                _refreshSelectPicker($select, _creatOptions(res.data, optionName, optionValue));
              } else { // response fail
                // mock data
                var mockData = [];
                for (var index = 0; index < 3; index++) {
                  var mockObj = {};
                  mockObj[optionName] = 'test' + index;
                  mockObj[optionValue] = index;
                  mockData.push(mockObj);
                }
                alert('this is a mock data,remove it in prod');
                _refreshSelectPicker($select, _creatOptions(mockData, optionName, optionValue));
                // mock data
                
                // _refreshSelectPicker($select); // in prod remove this  comments
              }
            })
            .always(function () {
              // close loading code
            });
        } else {
          _refreshSelectPicker($select);
        }
      });
  })();
```