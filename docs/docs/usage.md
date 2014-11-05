# Usage

How to use bootstrap-select.

---

Create your `<select>` with the `selectpicker` class. The data-api will automatically theme these elements.

<pre class="prettyprint linenums">
  &lt;select class="selectpicker"&gt;
    &lt;option&gt;Mustard&lt;/option&gt;
    &lt;option&gt;Ketchup&lt;/option&gt;
    &lt;option&gt;Relish&lt;/option&gt;
  &lt;/select&gt;
</pre>

Options can be passed via data attributes or JavaScript.

<pre class="prettyprint linenums">
  $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
  });
</pre>
