bootstrap-select-ajax
================

[![Latest release](https://img.shields.io/github/release/silviomoreto/bootstrap-select.svg)](https://github.com/silviomoreto/bootstrap-select/releases/latest)
[![Bower](https://img.shields.io/bower/v/bootstrap-select.svg)]()
[![npm](https://img.shields.io/npm/v/bootstrap-select.svg)](https://www.npmjs.com/package/bootstrap-select)
[![NuGet](https://img.shields.io/nuget/v/bootstrap-select.svg)](https://www.nuget.org/packages/bootstrap-select/)
[![CDNJS](https://img.shields.io/cdnjs/v/bootstrap-select.svg)](https://cdnjs.com/libraries/bootstrap-select)

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Dependency Status](https://david-dm.org/silviomoreto/bootstrap-select.svg)](https://david-dm.org/silviomoreto/bootstrap-select)
[![devDependency Status](https://david-dm.org/silviomoreto/bootstrap-select/dev-status.svg)](https://david-dm.org/silviomoreto/bootstrap-select#info=devDependencies)

Notice: This package is forked from [silviomoreto/bootstrap-select](https://github.com/silviomoreto/bootstrap-select). I just modify a little code for ajax(at line 1426 in js/boostrap-select-ajax.js).And i add a stamp in js file. 

Bootstrap-select is a jQuery plugin that utilizes Bootstrap's dropdown.js to style and bring additional functionality to standard select elements.

<a href="http://silviomoreto.github.io/bootstrap-select/"><img src="https://cloud.githubusercontent.com/assets/2874325/18023324/42cf556c-6bb5-11e6-84ce-35be08ae57ba.gif" alt="bootstrap-select demo"></a>

## Demo and Documentation

You can view a live demo and some examples of how to use the various options [here](http://silviomoreto.github.io/bootstrap-select).

Bootstrap-select's documentation, included in this repo in the root directory, is built with MkDocs and publicly hosted on GitHub Pages at http://silviomoreto.github.io/bootstrap-select. The documentation may also be run locally.


### Running documentation locally

1. If necessary, [install MkDocs](http://www.mkdocs.org/#installation).
3. From the `/bootstrap-select/docs` directory, run `mkdocs serve` in the command line.
4. Open `http://127.0.0.1:8000/` in your browser, and voilà.

Learn more about using MkDocs by reading its [documentation](http://www.mkdocs.org/).

## Usage

Create your `<select>` with the `.selectpicker` class.
```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</select>
```

If you use a 1.6.3 or newer, you don't need to do anything else, as the data-api automatically picks up the `<select>`s with the `selectpicker` class.

If you use an older version, you need to add the following either at the bottom of the page (after the last selectpicker), or in a [`$(document).ready()`](http://api.jquery.com/ready/) block.
```js
// To style only <select>s with the selectpicker class
$('.selectpicker').selectpicker();
```
Or
```js
// To style all <select>s
$('select').selectpicker();
```

Checkout the [documentation](http://silviomoreto.github.io/bootstrap-select) for further information.


## ajax 
```html
<select class="ajax-search" ajax-url="xxx" ajax-params="{#wmsType#: #all#}" ajax-option-name="wmsName" ajax-option-value="id" ajax-search-key="searchkey"></select>
<!--ajax-url: string
ajax-params: like json,but use '#' instead '"'
ajax-option-name: Appoint your option name, the key of your response data
ajax-option-value: Appoint your option value, the key of your response data-->

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

    // creat select options
    function _creatOptions(data, optionName, optionValue) {
      var options = '';
      for (var index = 0; index < data.length; index++) {
        var name = data[index][optionName];
        options += '<option value="' + data[index][optionValue] + '">' + name + '</option>';
      }
      return options;
    }

    // bind keyup event
    $(document)
      .on('keyup', '.bootstrap-select.open.ajax-search .bs-searchbox>input', function (e) {
        var stamp = $(this).parents('.bootstrap-select.ajax-search.open').attr('selectpicker-stamp');
        var $select = $('[selectpicker-stamp="' + stamp + '"]').find('select');
        var api = $select.attr('ajax-url');
        var params = {};
        if ($select.attr('ajax-params')) {
          params = JSON.parse($select.attr('ajax-params').replace(/#/g, '"'));
        }
        var optionName = $select.attr('ajax-option-name');
        var optionValue = $select.attr('ajax-option-value');
        params.token = $select.attr('ajax-token');
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
                
                // _refreshSelectPicker($select); // in prod this line remove comments
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