bootstrap-select
================

A custom select for @twitter bootstrap using button dropdown, designed to behave like regular Bootstrap selects; 
originally by [Silvio Moreto](http://github.com/silviomoreto) and [Ana Carolina](http://github.com/anacarolinats).
 See a here an [example](http://caseyjhol.github.com/bootstrap-select/)

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

You can set different Bootstrap classes on the button via the `data-style` attribute. Classes are applied to `.btn-group`.Apply `.span*` class to the selects to set the width. Add the `disabled` attribute to the select to apply the `.disabled` class. Specify `data-size` to choose how many items to show in the menu by default. Make the select a dropup menu by adding the `.dropup` class to the select.