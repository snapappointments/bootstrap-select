bootstrap-select
================

[![Latest release](http://img.shields.io/github/release/silviomoreto/bootstrap-select.svg)](https://github.com/silviomoreto/bootstrap-select/releases/latest)
[![Dependency Status](https://david-dm.org/silviomoreto/bootstrap-select.svg)](https://david-dm.org/silviomoreto/bootstrap-select)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

[![devDependency Status](https://david-dm.org/silviomoreto/bootstrap-select/dev-status.svg)](https://david-dm.org/silviomoreto/bootstrap-select#info=devDependencies)

A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects.

## Demo and Documentation

See a Bootstrap 3.2.0 example [here](http://silviomoreto.github.io/bootstrap-select/3).

See a Bootstrap 2.3.2 example [here](http://silviomoreto.github.io/bootstrap-select) (deprecated).

## Authors

[Silvio Moreto](https://github.com/silviomoreto),
[Ana Carolina](https://github.com/anacarolinats),
[caseyjhol](https://github.com/caseyjhol),
[Matt Bryson](https://github.com/mattbryson), and
[t0xicCode](https://github.com/t0xicCode).

## Usage

Create your `<select>` with the `.selectpicker` class.
```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</select>
```

Enable Bootstrap-Select via JavaScript:
```js
$('.selectpicker').selectpicker();
```
Or just
```js
$('select').selectpicker();
```

***Starting with the current dev version, we support bootstrap's data-api, which means that you don't even have to manually instanciate bootstrap-select.***

Checkout the [documentation](http://silviomoreto.github.io/bootstrap-select) for further information.

## CDN

**N.B.**: The CDN is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN. Check [the GitHub page](https://github.com/silviomoreto/bootstrap-select/releases) for the latest release.

* [//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/css/bootstrap-select.min.css](//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/css/bootstrap-select.min.css)
* [//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/js/bootstrap-select.min.js](//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/js/bootstrap-select.min.js)
* //cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/js/i18n/defaults-*.min.js (The translation files)

## Bugs and feature requests

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md). Make sure you're using the latest version of bootstrap-select before submitting an issue.

* [Bug reports](CONTRIBUTING.md#bug-reports)
* [Feature requests](CONTRIBUTING.md#feature-requests)

## Copyright and license

Copyright (C) 2013-2014 bootstrap-select

Licensed under [the MIT license](LICENSE).
