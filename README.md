bootstrap-select
================

A custom select for @twitter bootstrap using button dropdown, designed to behave like regular Bootstrap selects; 
originally by [Silvio Moreto](http://github.com/silviomoreto) and [Ana Carolina](http://github.com/anacarolinats).
 See an [example](http://caseyjhol.github.com/bootstrap-select/).
# Usage

Create your `<select>` with the `.selectpicker` class.

    <select class="selectpicker">
      <option>Mustard</select>
      <option>Ketchup</select>
      <option>Barbecue</select>
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