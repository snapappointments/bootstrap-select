bootstrap-select
================

A custom select for @twitter bootstrap using button dropdown; originally by Silvio Moreto

## Observation

For properly work on some browser, you need to add a `.clearfix` class to your css.

# Usage

Create yours `<select>` and add to them the class `.selectpicker`, like example below:

    <select class="selectpicker">
      <option>Mostard</select>
      <option>Ketchup</select>
      <option>Barbecue</select>
    </select>
    
In your javascript, just add the line:

    $('.selectpicker').selectpicker();
    
You can also pass a button bootstrap class to your select using the option `btnStyle`, like:

    $('.selectpicker').selectpicker({
      btnStyle: 'btn-info'
    });