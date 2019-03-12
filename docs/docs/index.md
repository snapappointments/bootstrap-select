# Getting Started

---

## Quick start

Bootstrap-select requires jQuery v1.9.1+, Bootstrap’s dropdown.js component, and Bootstrap's CSS. If you're not already using Bootstrap in your project, a precompiled version of the Bootstrap v3.3.7 minimum requirements can be downloaded [here](https://getbootstrap.com/docs/3.3/customize/?id=7830063837006f6fc84f). If using bootstrap-select with Bootstrap v4+, you'll also need Popper.js. For all of Bootstrap v4's requirements, see [Getting started](https://getbootstrap.com/docs/4.1/getting-started/introduction/). A precompiled version of the requirements will be made available in an upcoming release of bootstrap-select.

Several quick start options are available:

- [Download the latest release.](https://github.com/snapappointments/bootstrap-select/archive/v1.13.7.zip)
- Clone the repo: `git clone https://github.com/snapappointments/bootstrap-select.git`
- Install with [npm](https://www.npmjs.com/package/bootstrap-select): `npm install bootstrap-select`
- Install with [yarn](https://yarn.pm/bootstrap-select): `yarn add bootstrap-select`
- Install with [Composer](https://getcomposer.org): `composer require snapappointments/bootstrap-select`
- Install with [NuGet](https://www.nuget.org/packages/bootstrap-select): `Install-Package bootstrap-select`
- Install with [Bower](https://bower.io): `bower install bootstrap-select`
- Install via CDN ([cdnjs](https://cdnjs.com/libraries/bootstrap-select) or [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-select)):

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/css/bootstrap-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/js/i18n/defaults-*.min.js"></script>
```

<div class="bs-docs-example small">
	The CDN is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN.
</div>

# Usage

---
<div class="card border-warning">
	<div class="card-body">
		Bootstrap 4 only works with bootstrap-select v1.13.0+. By default, bootstrap-select automatically detects the version of Bootstrap being used. However, there are some instances where the version detection won't work. See the [documentation](https://developer.snapappointments.com/bootstrap-select/options/#bootstrap-version) for more information.
	</div>
</div>

### Via `selectpicker` class
Add the `selectpicker` class to your select elements to auto-initialize bootstrap-select.
```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</select>
```

### Via JavaScript
```js
// To style only selects with the my-select class
$('.my-select').selectpicker();
```
or
```js
// To style all selects
$('select').selectpicker();
```

If calling bootstrap-select via JavaScript, you will need to wrap your code in a [`.ready()`](https://api.jquery.com/ready/) block or place it at the bottom of the page (after the last instance of bootstrap-select).

```js
$(function () {
	$('select').selectpicker();
});
```
