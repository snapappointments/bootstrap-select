bootstrap-select with dependencies
================

Forked from https://github.com/silviomoreto/bootstrap-select

Extended bootstrap-select to support dependencies - i.e. enable/disable a &lt;select&gt;, &lt;optgroup&gt;, &lt;option&gt; based on the evaluation result of a jQuery selector string.

## Usage

Use "enable-if" attribute on the desired &lt;select&gt; or &lt;optgroup&gt; or &lt;option&gt;. The value of "enable-if" should be a jQuery selector expression. You can also use "&&" as logic AND. Nesting is not supported. If no "enable-if" attribute is provided or if its value is empty, by default the element will be *enabled*.

## Examples

```html
<select id="platform">
	<option>--- Select Platform ---</option>
	<option value="android">Android</option>
	<option value="ios">iOS</option>
</select>

<input type="checkbox" id="all-platforms"/> <label for="all-platforms">All Platforms</label>

<select>
	<option>--- Select Model ---</option>
	<optgroup label="Android" enable-if="#platform option[value='android']:selected, #all-platforms:checked">
		<option>Galaxy Note III</option>
		<option>Galaxy S4</option>
		<option>HTC One</option>
	</optgroup>
	<option enable-if="option[value='ios']:selected">iPhone 5S</option>
	<option enable-if="#platform option[value='ios']:selected && #all-platforms:checked">iPhone 5</option>
</select>
```
* Please note iPhone 5 is configured to only show up when both iOS and All Platforms are selected. Sorry this example logically makes little sense.

## Limitations
* Only value changes from &lt;select&gt; <input> are monitored and set to trigger a refresh of the listening &lt;select&gt;. If you use selectors like "div#myDiv[class='myClass']" you will not be able to trigger a refresh by adding or removing "myClass" to or from the div.
* When "enable-if" has no value the element is by default enabled. This is a somewhat weird logic. Just wanted to avoid the double negative statement, e.g. disable-if="select#mySelect option[value!="myValue"]:selected"
* Try to be as specific about the selector as possible, or there could be performance issues.

## Copyright and license

Copyright (C) 2013 bootstrap-select

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
