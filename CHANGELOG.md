### v1.10.0 (2016-02-17)

#### Bug Fixes
* [#1268]: performance bug in clickListener
* [#1273]: html5 validation message disappears in Chrome 47+
* [#1295]: hide select by default (so there is no flash of unstyled content)

#### New Features
* [#950]: add `.selectpicker('toggle')` method to allow menu to be open/closed programmatically
* [#1272]: add showTick option
* [#1284]: selectAll and deselectAll now trigger the `changed.bs.select` event

Add Lithuanian translations.

[#1268]: https://github.com/silviomoreto/bootstrap-select/issues/1268
[#1273]: https://github.com/silviomoreto/bootstrap-select/issues/1273
[#1295]: https://github.com/silviomoreto/bootstrap-select/issues/1295
[#950]: https://github.com/silviomoreto/bootstrap-select/issues/950
[#1272]: https://github.com/silviomoreto/bootstrap-select/issues/1272
[#1284]: https://github.com/silviomoreto/bootstrap-select/issues/1284

-------------------

### v1.9.4 (2016-01-18)

#### Bug fixes
* [#1250]: don't destroy original select when using `destroy` method
* [#1230]: Optgroup label missing when first option is disabled and `hideDisabled` is true

Add new translations.

[#1250]: https://github.com/silviomoreto/bootstrap-select/issues/1250
[#1230]: https://github.com/silviomoreto/bootstrap-select/issues/1230

-------------------

### v1.9.3 (2015-12-16)

#### Bug fixes
* Fix [#1235] - issue with selects that had `form-control` class

[#1235]: https://github.com/silviomoreto/bootstrap-select/issues/1235
