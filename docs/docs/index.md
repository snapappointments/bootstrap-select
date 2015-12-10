# bootstrap-select

---

## Overview

Bootstrap-select is a jQuery plugin that utilizes Bootstrap's dropdown.js to style and bring additional functionality to normal select boxes.

---

## Install

```sh
bower install bootstrap-select --save # bower
npm install bootstrap-select --save   # npm
Install-Package bootstrap-select      # NuGet
```

---

## Getting Started

Bootstrap-select requires bootstrap and jquery. Create your `<select>` with the `.selectpicker` class. The data-api will automatically theme these elements.

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

Options can be passed via data attributes or JavaScript.

```js
$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});
```

### CDN

The folks at CDNJS host a copy of the library. Just use these links:

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.8.1/css/bootstrap-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.8.1/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.8.1/js/i18n/defaults-*.min.js"></script>
```

