function QueryStringToJSON() {            
  var pairs = location.search.slice(1).split('&');
  
  var result = {};
  pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.parse(JSON.stringify(result));
}

$(document).ready(function() {
  var query;

  if (window.location.search) query = QueryStringToJSON(window.location.search);

  console.log(query)

  function formPostData(url, fields) {
    var form = $('<form style="display: none;" method="post" action="' + url + '"></form>');
    $.each(fields, function(name, value) {
      var input = $('<input type="hidden" name="' + name + '">');
      input.attr('value', value);
      form.append(input);
    });

    $(document).find('body').append(form);

    form[0].submit(function(e) {
      e.preventDefault();
    });

    form.remove();
  }

  function plnkrOpener() {
    var ctrl = {},
        bootstrapVersion = 'latest',
        suffix = '';

    if (query) {
      if (query.bootstrap) bootstrapVersion = query.bootstrap;
    }

    if (bootstrapVersion[0] > 3 || bootstrapVersion === 'latest') {
      suffix = '.bundle';
    }
  
    ctrl.example = {
      path: ctrl.examplePath,
      manifest: undefined,
      files: undefined,
      name: 'bootstrap-select playground (Bootstrap ' + bootstrapVersion + ')'
    };
  
    ctrl.open = function() {
      var postData = {
        'tags[0]': 'jquery',
        'tags[1]': 'bootstrap-select',
        'tags[2]': 'bootstrap',
        'private': true
      };
  
      ctrl.example.files = [
        {
          name: 'index.html',
          url: 'playground-template.html',
          //url: 'https://raw.githubusercontent.com/snapappointments/bootstrap-select/v1.13.0-dev/tests/bootstrap' + bootstrapVersion + '.html',
          content: ''
        },
        {
          name: 'js/bootstrap-select.js',
          url: 'https://raw.githubusercontent.com/snapappointments/bootstrap-select/v1.13.0-dev/dist/js/bootstrap-select.js',
          content: ''
        },
        {
          name: 'css/bootstrap-select.css',
          url: 'https://raw.githubusercontent.com/snapappointments/bootstrap-select/v1.13.0-dev/dist/css/bootstrap-select.css',
          content: ''
        }
      ]

      function getData(file) {
        return $.ajax({
          method: 'GET',
          url: file.url
        })
        .then(function(data) {
          file.content = data;

          if (file.name === 'index.html') {
            file.content = file.content.replace('{{ bootstrap-css }}', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@' + bootstrapVersion + '/dist/css/bootstrap.min.css">');
            file.content = file.content.replace('{{ bootstrap-js }}', '<script src="https://cdn.jsdelivr.net/npm/bootstrap@' + bootstrapVersion + '/dist/js/bootstrap' + suffix + '.min.js"></script>');

            //file.content = file.content.replace(new RegExp('../dist/', 'g'), '');
          }

          postData['files[' + file.name + ']'] = file.content;
        });
      }

      var files = [];

      $.each(ctrl.example.files, function(i, file) {
        files.push(getData(file));
      });

      function sendData() {
        postData.description = ctrl.example.name;

        formPostData('https://plnkr.co/edit/?p=preview', postData);
      };

      $.when.apply(this, files).done(function() {
        sendData();
      });
    };
    
    return ctrl.open()
  }

  plnkrOpener();
});