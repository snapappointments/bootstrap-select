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
<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<p id="optgroup">It also works with option groups:</p>

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
<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    &lt;optgroup label="Picnic"&gt;
      &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
    &lt;/optgroup&gt;
    &lt;optgroup label="Camping"&gt;
      &lt;option&gt;Tent&lt;/option&gt;
      &lt;option&gt;Flashlight&lt;/option&gt;
      &lt;option&gt;Toilet Paper&lt;/option&gt;
    &lt;/optgroup&gt;
  &lt;/select>
</pre>

<p id="multiselect">And with multiple selects:</p>

<div class="bs-docs-example">
  <select class="selectpicker" multiple>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" multiple&gt;
      &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

(Note that you should give your selectpicker a <code>name</code> that ends with array syntax (example: <code>&lt;select name="named[]" class="selectpicker" multiple&gt;</code>) such
that all items can be processed with php,... This is the same for <code>&lt;select&gt;</code>s without <code>bootstrap-select</code>.)

<p id="data-max-option">You can limit the number of elements you are allowed to select via the
  <code>data-max-option</code> attribute. It also works for option groups. </p>

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
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" multiple data-max-options="2"&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select&gt;

  &lt;select class="selectpicker" multiple  data-max-options="2"&gt;
    &lt;optgroup label="Condiments" data-max-options="2"&gt;
      &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
    &lt;/optgroup&gt;
    &lt;optgroup label="Breads" data-max-options="2"&gt;
      &lt;option&gt;Plain&lt;/option&gt;
      &lt;option&gt;Steamed&lt;/option&gt;
      &lt;option&gt;Toasted&lt;/option&gt;
    &lt;/optgroup&gt;
  &lt;/select&gt;
</pre>

<p id="data-style">You can set different Bootstrap classes via the <code>data-style</code> attribute:</p>

<div class="bs-docs-example">
  <select class="selectpicker" data-style="btn-primary">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" data-style="btn-info">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" data-style="btn-success">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" data-style="btn-warning">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" data-style="btn-danger">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" data-style="btn-inverse">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" data-style="btn-primary"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-style="btn-info"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-style="btn-success"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-style="btn-warning"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-style="btn-danger"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-style="btn-inverse"&gt;
    ...
  &lt;/select>
</pre>

<p id="data-live-search">You can add a search input by passing <code>data-live-search="true"</code> attribute:</p>

<div class="bs-docs-example">
  <select class="selectpicker" data-live-search="true">
    <option>Hot Dog, Fries and a Soda</option>
    <option>Burger, Shake and a Smile</option>
    <option>Sugar, Spice and all things nice</option>
  </select>
</div>

<p id="title">You can also use the <code>title</code> attribute as an alternative to display when the option is
  selected:</p>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option title="Combo 1">Hot Dog, Fries and a Soda</option>
    <option title="Combo 2">Burger, Shake and a Smile</option>
    <option title="Combo 3">Sugar, Spice and all things nice</option>
  </select>
</div>

<p id="titleMultiples">Using the <code>title</code> attribute on a <code>multiple select</code> will show the default
  prompt text when nothing is selected (note: this will not work on single <code>select</code> elements as they must
  have a selected value):</p>

<div class="bs-docs-example">
  <select class="selectpicker" multiple title="Choose one of the following...">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" multiple title='Choose one of the following...'&gt;
     &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<p id="titleMultiplesFormat">Using the <code>data-selected-text-format</code> attribute on a <code>multiple
  select</code>
  you can specify how the selection is displayed.</p>

<p>The supported values are:</p>
<ul>
  <li><code>values</code> A comma delimted list of selected values. (default)</li>
  <li><code>count</code> If one item is selected, then the value is shown, if more than one is selected then the
    number of selected items is displayed, eg <span class="label">2 of 6 selected</span></li>
  <li><code>count > x</code> Where X is the number of items selected when the display format changes from
    <code>values</code> to <code>count</code></li>
</ul>
<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" multiple data-selected-text-format="count"&gt;
     &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count > 3">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Onions</option>
  </select>
</div>
<pre class="prettyprint linenums">
  &lt;select class="selectpicker" multiple data-selected-text-format="count&gt3"&gt;
     &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
      &lt;option&gt;Onions&lt;/option&gt;
  &lt;/select>
</pre>

<p id="show-tick">You can also show the tick icon on single <code>select</code> with the <code>show-tick</code>
  class:</p>

<div class="bs-docs-example">
  <select class="selectpicker show-tick">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>



<pre class="prettyprint linenums">
  &lt;select class="selectpicker show-tick"&gt;
     &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<p id="show-menu-arrow">The bootstrap menu arrow can be added with the <code>show-menu-arrow</code> class:</p>

<div class="bs-docs-example">
  <select class="selectpicker show-menu-arrow">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>



<pre class="prettyprint linenums">
  &lt;select class="selectpicker show-menu-arrow"&gt;
     &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>


<p id="classes">Classes added to the options are transferred to the select:</p>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option class="special">Ketchup</option>
    <option>Relish</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option class="special"&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>
<pre class="prettyprint linenums">
  .special {
    font-style: italic;
    font-weight: bold !important;
    color:#bc0000 !important;
    background:#000;
  }
</pre>

<p id="span">Wrap selects in grid columns, or any custom parent element, to easily enforce desired widths.</p>

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

<p id="disabled-select">Add the <code>disabled</code> attribute to the select to apply the <code>disabled</code> class.
</p>

<div class="bs-docs-example">
  <select class="selectpicker" disabled>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker" disabled&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<p id="disabled-option">Adding <code>disabled="disabled"</code> to an option transfers to the menu.</p>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option disabled>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker" disabled&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option disabled="disabled"&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select>
</pre>

<p id="disabled-option-group">Adding <code>disabled="disabled"</code> to an option group cascades to the children.</p>

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
<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    &lt;optgroup label="Picnic" disabled&gt;
      &lt;option&gt;Mustard&lt;/option&gt;
      &lt;option&gt;Ketchup&lt;/option&gt;
      &lt;option&gt;Relish&lt;/option&gt;
    &lt;/optgroup&gt;
    &lt;optgroup label="Camping"&gt;
      &lt;option&gt;Tent&lt;/option&gt;
      &lt;option&gt;Flashlight&lt;/option&gt;
      &lt;option&gt;Toilet Paper&lt;/option&gt;
    &lt;/optgroup&gt;
  &lt;/select>
</pre>


<p id="size">The <code>size</code> option is set to <code>'auto'</code> by default. When <code>size</code> is set to
  <code>'auto'</code>, the menu always opens up to show as many items as the window will allow without being cut off.
  Set <code>size</code> to <code>false</code> to always show all items. The size of the menu can also be specifed
  using the <code>data-size</code> attribute.</p>

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

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    ...
  &lt;/select>
<br>
Note: this is the same as:<br>
  &lt;select class="selectpicker" data-size="auto"&gt;
    ...
  &lt;/select>
</pre>

<p id="data-size">Specify a number for <code>data-size</code> to choose the maximum number of items to show in the menu.
</p>

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

<pre class="prettyprint linenums">
  &lt;select class="selectpicker" data-size="5"&gt;
    ...
  &lt;/select>
</pre>

<p id="data-divider">Add <code>data-divider="true"</code> to an option to turn it into a divider.</p>

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

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    ...
    &lt;option data-divider="true"&gt;&lt;/option>
    ...
  &lt;/select>
</pre>

<p id="data-subtext">Add subtext to an option or optgroup with the <code>data-subtext</code> attribute:</p>

<div class="bs-docs-example">
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
  </div>

  <div class="row-fluid">
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
    <span class="help-inline">With <code>showSubtext</code> set to true.</span>
  </div>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    ...
    &lt;option data-subtext="Heinz"&gt;Ketchup&lt;/option>
    ...
  &lt;/select>
</pre>

<p id="data-icon">Add an icon to an option or optgroup with the <code>data-icon</code> attribute:</p>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option data-icon="icon-glass">Mustard</option>
    <option data-icon="icon-heart">Ketchup</option>
    <option data-icon="icon-film">Relish</option>
    <option data-icon="icon-home">Mayonnaise</option>
    <option data-icon="icon-print">Barbecue Sauce</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    ...
    &lt;option data-icon="icon-heart"&gt;Ketchup&lt;/option>
    ...
  &lt;/select>
</pre>

<p id="data-content">Insert custom HTML into the option with the <code>data-content</code> attribute:</p>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option data-content="<span class='label label-warning'>Mustard</span>">Mustard</option>
    <option data-content="<span class='label label-danger label-important'>Ketchup</span>">Ketchup</option>
    <option data-content="<span class='label label-success'>Relish</span>">Relish</option>
    <option data-content="<span class='label label-info'>Mayonnaise</span>">Mayonnaise</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    ...
    &lt;option data-content="&lt;span class='label label-success'&gt;Relish&lt;/span&gt;"&gt;Relish&lt;/option>
    ...
  &lt;/select>
</pre>

<p id="header">Add a header to the dropdown menu, e.g. <code>header: 'Select a condiment'</code> or <code>data-header="Select
  a condiment"</code></p>

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

<pre class="prettyprint linenums">
  &lt;select class="selectpicker" data-header="Select a condiment"&gt;
    ...
  &lt;/select>
</pre>

<p id="container">Append the select to a specific element, e.g. <code>container: 'body'</code> or <code>data-container=".main-content"</code>
</p>

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

<pre class="prettyprint linenums">
&lt;div style="overflow:hidden;"&gt;
  &lt;select class="selectpicker"&gt;
    ...
  &lt;/select>

  &lt;select class="selectpicker" data-container="body"&gt;
    ...
  &lt;/select>
&lt;div&gt;
</pre>

<p id="dropup"><code>dropupAuto</code> is set to true by default, which automatically determines whether or not the
  select should be a dropup. If <code>dropupAuto</code> is set to false, manually make the select a dropup menu by
  adding the <code>.dropup</code> class to the select.</p>

<div class="bs-docs-example">
  <select class="selectpicker dropup">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker dropup"&gt;
    ...
  &lt;/select>
</pre>
