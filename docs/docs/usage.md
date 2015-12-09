# Usage

How to use bootstrap-select.

---

Create your `<select>` with the `.selectpicker` class. The data-api will automatically theme these elements.

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

Options can be passed via data attributes or JavaScript.

```js
$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});
```
