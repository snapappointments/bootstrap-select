bootstrap-select
================

A custom select / multiselect for @twitter bootstrap using button dropdown, designed to behave like regular Bootstrap selects;

## Demo

See an  example [here](http://silviomoreto.github.com/bootstrap-select/).

## Authors

[Silvio Moreto](http://github.com/silviomoreto),
[Ana Carolina](http://github.com/anacarolinats),
[caseyjhol](https://github.com/caseyjhol), and
[Matt Bryson](https://github.com/mattbryson).

## Usage

Create your `<select>` with the `.selectpicker` class.

    <select class="selectpicker">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Barbecue</option>
    </select>
    
Enable Bootstrap-Select via JavaScript:

    $('.selectpicker').selectpicker();

Or just

    $('select').selectpicker();
    
Options can be passed via data attributes or JavaScript.

    $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
    });

You can set different Bootstrap classes on the button via the `data-style` attribute. Classes are applied to `.btn-group`.Apply `.span*` class to the selects to set the width. Add the `disabled` attribute to the select to apply the `.disabled` class. The `size` option is set to `'auto'` by default. When `size` is set to `'auto'`, the menu always opens up to show as many items as the window will allow without being cut off. Set `size` to `false` to always show all items. The size of the menu can also be specifed using the `data-size` attribute. Specify a number for `data-size` to choose the maximum number of items to show in the menu. Make the select a dropup menu by adding the `.dropup` class to the select.

## Copyright and license

Copyright (C) 2013 bootstrap-select

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
