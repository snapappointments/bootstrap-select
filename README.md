<h1 align="center">bootstrap-select</h1>

<p align="center">
	<strong>The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more. Now with Bootstrap 5 support.</strong>
</p>

<p align="center">
	<a href="https://github.com/snapappointments/bootstrap-select/releases/latest" target="_blank">
		<img src="https://img.shields.io/github/release/snapappointments/bootstrap-select.svg" alt="Latest release">
	</a>
	<a href="https://www.npmjs.com/package/bootstrap-select" target="_blank">
		<img src="https://img.shields.io/npm/v/bootstrap-select.svg" alt="npm">
	</a>
	<a href="https://www.nuget.org/packages/bootstrap-select" target="_blank">
		<img src="https://img.shields.io/nuget/v/bootstrap-select.svg" alt="NuGet">
	</a>
	<a href="https://cdnjs.com/libraries/bootstrap-select" target="_blank">
		<img src="https://img.shields.io/cdnjs/v/bootstrap-select.svg" alt="CDNJS">
	</a>
	<a href="https://www.jsdelivr.com/package/npm/bootstrap-select" target="_blank">
		<img src="https://data.jsdelivr.com/v1/package/npm/bootstrap-select/badge?style=rounded" alt="jsDelivr">
	</a>
	<br>
	<a href="https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE" target="_blank">
		<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License">
	</a>
</p>

<p align="center">
	<a href="https://developer.snapappointments.com/bootstrap-select"><img src="https://user-images.githubusercontent.com/2874325/38997831-97e12bbe-43ab-11e8-85f5-b8c05d91c7b1.gif" width="289" height="396" alt="bootstrap-select demo"></a>
</p>

## Demo

You can view a live demo and some examples of how to use the various options [here](https://developer.snapappointments.com/bootstrap-select/examples/).

## Quick start

Bootstrap-select requires jQuery v1.9.1+, Bootstrap’s dropdown.js component, and Bootstrap's CSS. If you're not already using Bootstrap in your project, a precompiled version of the Bootstrap v3.4.1 minimum requirements can be downloaded [here](https://getbootstrap.com/docs/3.4/customize/?id=7830063837006f6fc84f). If using bootstrap-select with Bootstrap v4+, you'll also need Popper.js. For all of Bootstrap v4's requirements, see [Getting started](https://getbootstrap.com/docs/4.1/getting-started/introduction/). A precompiled version of the requirements will be made available in an upcoming release of bootstrap-select.

Several quick start options are available:

- [Download the latest release.](https://github.com/snapappointments/bootstrap-select/archive/v1.14.0-beta3.zip)
- Clone the repo: `git clone https://github.com/snapappointments/bootstrap-select.git`
- Install with [npm](https://www.npmjs.com/package/bootstrap-select): `npm install bootstrap-select`
- Install with [yarn](https://yarnpkg.com/package/bootstrap-select): `yarn add bootstrap-select`
- Install with [Composer](https://packagist.org/packages/snapappointments/bootstrap-select): `composer require snapappointments/bootstrap-select`
- Install with [NuGet](https://www.nuget.org/packages/bootstrap-select): `Install-Package bootstrap-select`
- Install with [Bower](https://bower.io): `bower install bootstrap-select`
- Install via CDN ([cdnjs](https://cdnjs.com/libraries/bootstrap-select), [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-select) or [PageCDN](https://pagecdn.com/lib/bootstrap-select)):

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/css/bootstrap-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/i18n/defaults-*.min.js"></script>
```
> The CDN is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN.

## Usage

> Bootstrap 4 only works with bootstrap-select v1.13.0+. By default, bootstrap-select automatically detects the version of Bootstrap being used. However, there are some instances where the version detection won't work. See the [documentation](https://developer.snapappointments.com/bootstrap-select/options/#bootstrap-version) for more information.

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


Check out the [documentation](https://developer.snapappointments.com/bootstrap-select) for further information.

## Bugs and feature requests

Anyone and everyone is welcome to contribute. **Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md)**. Make sure you're using the latest version of bootstrap-select before submitting an issue.

* [Bug reports](CONTRIBUTING.md#bug-reports)
* [Feature requests](CONTRIBUTING.md#feature-requests)

## Documentation

Bootstrap-select's documentation, included in this repo in the root directory, is built with MkDocs and hosted at https://developer.snapappointments.com/bootstrap-select. The documentation may also be [run locally](CONTRIBUTING.md#running-documentation-locally).

## Copyright and license

Copyright (C) 2012-2018 [SnapAppointments, LLC](https://snapappointments.com)

Licensed under [the MIT license](LICENSE).
