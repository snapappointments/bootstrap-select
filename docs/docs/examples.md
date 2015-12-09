# Examples

See bootstrap-select in action

---

<div class="bs-docs-example">
  <p>Make this:</p>

  <select>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <p>Become this:</p>

  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<div id="optgroup"></div>

It also works with option groups:

<div class="bs-docs-example">
  <select class="selectpicker">
    <optgroup label="Picnic">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </optgroup>
    <optgroup label="Camping">
      <option>Tent</option>
      <option>Flashlight</option>
      <option>Toilet Paper</option>
    </optgroup>
  </select>
</div>

```html
<select class="selectpicker">
  <optgroup label="Picnic">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </optgroup>
  <optgroup label="Camping">
    <option>Tent</option>
    <option>Flashlight</option>
    <option>Toilet Paper</option>
  </optgroup>
</select>
```

<p id="multiselect"></p>
And with multiple selects:

<div class="bs-docs-example">
  <select class="selectpicker" multiple>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" multiple>
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<div id="data-max-option"></div>
You can limit the number of elements you are allowed to select via the `data-max-option` attribute. It also works for option groups.

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-max-options="2">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" multiple>
    <optgroup label="Condiments" data-max-options="2">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </optgroup>
    <optgroup label="Breads" data-max-options="2">
      <option>Plain</option>
      <option>Steamed</option>
      <option>Toasted</option>
    </optgroup>
  </select>
</div>

```html
<select class="selectpicker" multiple data-max-options="2">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>

<select class="selectpicker" multiple>
  <optgroup label="Condiments" data-max-options="2">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </optgroup>
  <optgroup label="Breads" data-max-options="2">
    <option>Plain</option>
    <option>Steamed</option>
    <option>Toasted</option>
  </optgroup>
</select>
```

<div id="data-style"></div>
You can set different Bootstrap classes via the `data-style` attribute:

<div class="bs-docs-example">
  <div class="form-group">
    <select class="selectpicker" data-style="btn-primary">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
  <div class="form-group">
    <select class="selectpicker" data-style="btn-info">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
  <div class="form-group">
    <select class="selectpicker" data-style="btn-success">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
  <div class="form-group">
    <select class="selectpicker" data-style="btn-warning">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
  <div class="form-group">
    <select class="selectpicker" data-style="btn-danger">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
</div>

```html
<select class="selectpicker" data-style="btn-primary">
  ...
</select>

<select class="selectpicker" data-style="btn-info">
  ...
</select>

<select class="selectpicker" data-style="btn-success">
  ...
</select>

<select class="selectpicker" data-style="btn-warning">
  ...
</select>

<select class="selectpicker" data-style="btn-danger">
  ...
</select>
```

<div id="data-live-search"></div>
You can add a search input by passing `data-live-search="true"` attribute:

<div class="bs-docs-example no-code">
  <select class="selectpicker" data-live-search="true">
    <option>Hot Dog, Fries and a Soda</option>
    <option>Burger, Shake and a Smile</option>
    <option>Sugar, Spice and all things nice</option>
  </select>
</div>

<p id="title"></p>
You can also use the `title` attribute as an alternative to display when the option is selected:

<div class="bs-docs-example no-code">
  <select class="selectpicker">
    <option title="Combo 1">Hot Dog, Fries and a Soda</option>
    <option title="Combo 2">Burger, Shake and a Smile</option>
    <option title="Combo 3">Sugar, Spice and all things nice</option>
  </select>
</div>

<p id="titleMultiples"></p>
Using the `title` attribute on a `multiple select` will show the default prompt text when nothing is selected (note: this will not work on single `select` elements as they must have a selected value):

<div class="bs-docs-example">
  <select class="selectpicker" multiple title="Choose one of the following...">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" multiple title="Choose one of the following...">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<p id="titleMultiplesFormat"></p>
Using the `data-selected-text-format` attribute on a `multiple select` you can specify how the selection is displayed.

The supported values are:

* `values` A comma delimted list of selected values. (default)</li>
* `count` If one item is selected, then the value is shown, if more than one is selected then the number of selected items is displayed, eg <span class="label">2 of 6 selected</span></li>
* `count > x` Where X is the number of items selected when the display format changes from `values` to `count`</li>

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" multiple data-selected-text-format="count">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count > 3">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Onions</option>
  </select>
</div>

```html
<select class="selectpicker" multiple data-selected-text-format="count > 3">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
  <option>Onions</option>
</select>
```

<p id="show-tick"></p>
You can also show the tick icon on single `select` with the `show-tick` class:

<div class="bs-docs-example">
  <select class="selectpicker show-tick">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker show-tick">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<p id="show-menu-arrow"></p>
The bootstrap menu arrow can be added with the `show-menu-arrow` class:

<div class="bs-docs-example">
  <select class="selectpicker show-menu-arrow">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker show-menu-arrow">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<p id="classes"></p>
Classes added to the options are transferred to the select:

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option class="special">Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option class="special">Ketchup</option>
  <option>Relish</option>
</select>
```

```css
.special {
  font-weight: bold !important;
  color: #fff !important;
  background: #bc0000 !important;
  text-transform: uppercase;
}
```

<p id="grid"></p>
Wrap selects in grid columns, or any custom parent element, to easily enforce desired widths.

<div class="bs-docs-example">
  <div class="row">
    <div class="col-xs-3">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-xs-9">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-4">
       <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-xs-8">
       <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-5">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-xs-7">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-xs-3">
    <div class="form-group">
      <select class="selectpicker form-control">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
      </select>
    </div>
  </div>
</div>
```

<div id="data-width"></div>

Alternatively, use the `data-width` attribute to set the width of the select. Set `data-width` to `'auto'` to automatically adjust the width of the select to its widest option. `'fit'` automatically adjusts the width of the select to the width of its currently selected option. An exact value can also be specified, e.g., `300px` or `50%`.

<div class="bs-docs-example">
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>width: 'auto'</label>
        <select class="selectpicker form-control" data-width="auto">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>width: 'fit'</label>
        <select class="selectpicker form-control" data-width="fit">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>width: '100px'</label>
        <select class="selectpicker form-control" data-width="100px">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>width: '75%'</label>
        <select class="selectpicker form-control" data-width="75%">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
</div>

```html
<select class="selectpicker" data-width="auto">
  ...
</select>
<select class="selectpicker" data-width="fit">
  ...
</select>
<select class="selectpicker" data-width="100px">
  ...
</select>
<select class="selectpicker" data-width="75%">
  ...
</select>
```

<p id="disabled-select"></p>
Add the `disabled` attribute to the select to apply the `disabled` class.

<div class="bs-docs-example">
  <select class="selectpicker" disabled>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" disabled>
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<p id="disabled-option"></p>
Adding `disabled="disabled"` to an option transfers to the menu.

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option disabled>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option disabled>Ketchup</option>
  <option>Relish</option>
</select>
```

<p id="disabled-option-group"></p>
Adding `disabled="disabled"` to an option group cascades to the children.

<div class="bs-docs-example">
  <select class="selectpicker test">
    <optgroup label="Picnic" disabled>
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </optgroup>
    <optgroup label="Camping">
      <option>Tent</option>
      <option>Flashlight</option>
      <option>Toilet Paper</option>
    </optgroup>
  </select>
</div>

```html
<select class="selectpicker test">
  <optgroup label="Picnic" disabled>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </optgroup>
  <optgroup label="Camping">
    <option>Tent</option>
    <option>Flashlight</option>
    <option>Toilet Paper</option>
  </optgroup>
</select>
```

<div id="size"></div>
The `size` option is set to `'auto'` by default. When `size` is set to `'auto'`, the menu always opens up to show as many items as the window will allow without being cut off. Set `size` to `false` to always show all items. The size of the menu can also be specifed using the `data-size` attribute.

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

<p id="data-size"></p>
Specify a number for `data-size` to choose the maximum number of items to show in the menu.

<div class="bs-docs-example">
  <select class="selectpicker" data-size="5">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

```html
<select class="selectpicker" data-size="5">
  ...
</select>
```

<p id="data-divider"></p>
Add `data-divider="true"` to an option to turn it into a divider.

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option data-divider="true"></option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

```html
<select class="selectpicker" data-size="5">
  <option data-divider="true"></option>
</select>
```

<p id="data-subtext"></p>
Add subtext to an option or optgroup with the `data-subtext` attribute:

<div class="bs-docs-example">
  <div class="form-group">
    <select class="selectpicker">
      <option data-subtext="French's">Mustard</option>
      <option data-subtext="Heinz">Ketchup</option>
      <option data-subtext="Sweet">Relish</option>
      <option data-subtext="Miracle Whip">Mayonnaise</option>
      <option data-divider="true"></option>
      <option data-subtext="Honey">Barbecue Sauce</option>
      <option data-subtext="Ranch">Salad Dressing</option>
      <option data-subtext="Sweet & Spicy">Tabasco</option>
      <option data-subtext="Chunky">Salsa</option>
    </select>
  </div>

  <div class="form-group">
    <select class="selectpicker" data-show-subtext="true">
      <option data-subtext="French's">Mustard</option>
      <option data-subtext="Heinz">Ketchup</option>
      <option data-subtext="Sweet">Relish</option>
      <option data-subtext="Miracle Whip">Mayonnaise</option>
      <option data-divider="true"></option>
      <option data-subtext="Honey">Barbecue Sauce</option>
      <option data-subtext="Ranch">Salad Dressing</option>
      <option data-subtext="Sweet & Spicy">Tabasco</option>
      <option data-subtext="Chunky">Salsa</option>
    </select>
    <span class="help-block">With `showSubtext` set to true.</span>
  </div>
</div>

```html
<select class="selectpicker" data-size="5">
  <option data-subtext="Heinz">Ketchup</option>
</select>
```

<p id="data-icon"></p>
Add an icon to an option or optgroup with the `data-icon` attribute:

<div class="bs-docs-example">
  <select class="selectpicker">
    <option data-icon="glyphicon-glass">Mustard</option>
    <option data-icon="glyphicon-heart">Ketchup</option>
    <option data-icon="glyphicon-film">Relish</option>
    <option data-icon="glyphicon-home">Mayonnaise</option>
    <option data-icon="glyphicon-print">Barbecue Sauce</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option data-icon="glyphicon-heart">Ketchup</option>
</select>
```

<p id="data-content"></p>
Insert custom HTML into the option with the `data-content` attribute:

<div class="bs-docs-example">
  <select class="selectpicker">
    <option data-content="<span class='label label-warning'>Mustard</span>">Mustard</option>
    <option data-content="<span class='label label-danger label-important'>Ketchup</span>">Ketchup</option>
    <option data-content="<span class='label label-success'>Relish</span>">Relish</option>
    <option data-content="<span class='label label-info'>Mayonnaise</span>">Mayonnaise</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option data-content="<span class='label label-success'>Relish</span>">Relish</option>
</select>
```

<p id="header"></p>
Add a header to the dropdown menu, e.g. `header: 'Select a condiment'` or `data-header="Select a condiment"`

<div class="bs-docs-example">
  <div class="row-fluid">
    <select class="selectpicker" data-header="Select a condiment">
      <option data-subtext="French's">Mustard</option>
      <option data-subtext="Heinz">Ketchup</option>
      <option data-subtext="Sweet">Relish</option>
      <option data-subtext="Miracle Whip">Mayonnaise</option>
      <option data-divider="true"></option>
      <option data-subtext="Honey">Barbecue Sauce</option>
      <option data-subtext="Ranch">Salad Dressing</option>
      <option data-subtext="Sweet & Spicy">Tabasco</option>
      <option data-subtext="Chunky">Salsa</option>
    </select>
  </div>
</div>

```html
<select class="selectpicker" data-header="Select a condiment">
  ...
</select>
```

<p id="container"></p>
Append the select to a specific element, e.g. `container: 'body'` or `data-container=".main-content"`

<div class="bs-docs-example" style="overflow:hidden;">
  <div class="row-fluid">
    <select class="selectpicker">
      <option data-subtext="French's">Mustard</option>
      <option data-subtext="Heinz">Ketchup</option>
      <option data-subtext="Sweet">Relish</option>
      <option data-subtext="Miracle Whip">Mayonnaise</option>
      <option data-divider="true"></option>
      <option data-subtext="Honey">Barbecue Sauce</option>
      <option data-subtext="Ranch">Salad Dressing</option>
      <option data-subtext="Sweet & Spicy">Tabasco</option>
      <option data-subtext="Chunky">Salsa</option>
    </select>
    <select class="selectpicker" data-container="body">
      <option data-subtext="French's">Mustard</option>
      <option data-subtext="Heinz">Ketchup</option>
      <option data-subtext="Sweet">Relish</option>
      <option data-subtext="Miracle Whip">Mayonnaise</option>
      <option data-divider="true"></option>
      <option data-subtext="Honey">Barbecue Sauce</option>
      <option data-subtext="Ranch">Salad Dressing</option>
      <option data-subtext="Sweet & Spicy">Tabasco</option>
      <option data-subtext="Chunky">Salsa</option>
    </select>
  </div>
</div>

```html
<div style="overflow:hidden;">
  <select class="selectpicker">
    ...
  </select>
  <select class="selectpicker" data-container="body">
    ...
  </select>
</div>
```

<div id="dropup"></div>
`dropupAuto` is set to true by default, which automatically determines whether or not the select should be a dropup. If `dropupAuto` is set to false, manually make the select a dropup menu by adding the `.dropup` class to the select.

<div class="bs-docs-example">
  <select class="selectpicker dropup">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker dropup">
  ...
</select>
```
