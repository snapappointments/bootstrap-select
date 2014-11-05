# Methods

Interface with bootstrap-select.

---

## val()

You can set the selected value by calling the `val` method on the element.

<pre class="prettyprint linenums">
  $('.selectpicker').selectpicker('val', 'Mustard');
  $('.selectpicker').selectpicker('val', ['Mustard','Relish']);
</pre>

This is different to calling `val()` directly on the `select` element. If you call `val()` on the element directly,
the bootstrap-select ui will not refresh (as the change event only fires from user interaction). You will have to call 
the ui refresh method yourself.

<pre class="prettyprint linenums">
  $('.selectpicker').val('Mustard');
  $('.selectpicker').selectpicker('render');

  //this is the equivalent of the above
  $('.selectpicker').selectpicker('val', 'Mustard');
</pre>

---

## selectAll()

This will select all items in a multi-select.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('selectAll');
</pre>

---

## deselectAll()

This will deselect all items in a multi-select.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('deselectAll');
</pre>

---

## render()

You can force a re-render of the bootstrap-select ui with the `render` method. This is useful if you
programatically change any underlying values that affect the layout of the element.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('render');
</pre>

---

## mobile()

Enable mobile scrolling by calling `$('.selectpicker').selectpicker('mobile')`. This enables the device's native menu 
for select menus.

The method for detecting the browser is left up to the user.

<pre class="prettyprint linenums">
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
}
</pre>

---

## setStyle()

Modify the class(es) associated with either the button itself or its container.

If changing the class on the container:

<pre class="prettyprint linenums">
   $('.selectpicker').addClass('col-lg-12').selectpicker('setStyle');
</pre>

If changing the class(es) on the button (altering data-style):

<pre class="prettyprint linenums">
// Replace Class
  $('.selectpicker').selectpicker('setStyle', 'btn-danger');

// Add Class
  $('.selectpicker').selectpicker('setStyle', 'btn-large', 'add');

// Remove Class
  $('.selectpicker').selectpicker('setStyle', 'btn-large', 'remove');
</pre>


---

## refresh()

To programmatically update a select with JavaScript, first manipulate the select, then use the `refresh` method to 
update the UI to match the new state. This is necessary when removing or adding options, or when disabling/enabling a 
select via JavaScript.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('refresh');
</pre>

<div class="bs-docs-example">
  <select class="selectpicker remove-example">
    <option value="Mustard">Mustard</option>
    <option value="Ketchup">Ketchup</option>
    <option value="Relish">Relish</option>
  </select>
  <br/>
  <button class="btn btn-warning rm-mustard">Remove Mustard</button>
  <button class="btn btn-danger rm-ketchup">Remove Ketchup</button>
  <button class="btn btn-success rm-relish">Remove Relish</button>
</div>

<pre class="prettyprint linenums">
  &lt;select class="selectpicker remove-example"&gt;
    &lt;option value="Mustard"&gt;Mustard&lt;/option&gt;
    &lt;option value="Ketchup"&gt;Ketchup&lt;/option&gt;
    &lt;option value="Relish"&gt;Relish&lt;/option&gt;
  &lt;/select&gt;

&lt;button class="btn btn-warning rm-mustard"&gt;Remove Mustard&lt;/button&gt;
&lt;button class="btn btn-danger rm-ketchup"&gt;Remove Ketchup&lt;/button&gt;
&lt;button class="btn btn-success rm-relish"&gt;Remove Relish&lt;/button&gt;

  $('.rm-mustard').click(function() {
    $('.remove-example').find('[value=Mustard]').remove();
    $('.remove-example').selectpicker('refresh');
  });
</pre>

<div class="bs-docs-example">
  <select class="selectpicker disable-example">
    <option value="Mustard">Mustard</option>
    <option value="Ketchup">Ketchup</option>
    <option value="Relish">Relish</option>
  </select>
  <br/>
  <button class="btn ex-disable"><i class="icon-remove"></i> Disable</button>
  <button class="btn ex-enable"><i class="icon-ok"></i> Enable</button>
</div>
<pre class="prettyprint linenums">
      $('.ex-disable').click(function() {
          $('.disable-example').prop('disabled',true);
          $('.disable-example').selectpicker('refresh');
      });
      $('.ex-enable').click(function() {
          $('.disable-example').prop('disabled',false);
          $('.disable-example').selectpicker('refresh');
      });
</pre>

---

## hide()

To programmatically hide the bootstrap-select use the `hide` method.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('hide');
</pre>

---

## show()

To programmatically show the bootstrap-select use the `show` method.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('show');
</pre>

---

## destroy()

To programmatically destroy (remove) the bootstrap-select use the `destroy` method.

<pre class="prettyprint linenums">
   $('.selectpicker').selectpicker('destroy');
</pre>
