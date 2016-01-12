## react-bootstrap-select

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

A custom select / multiselect for Bootstrap using button dropdown, designed to
behave like regular Bootstrap selects.  Tested with React 0.12 and Bootstrap 3.
Based on https://github.com/silviomoreto/bootstrap-select

<img src="http://i.imgur.com/ypIxZZ2.gif" height="360px" />

### 1. Install
```sh
$ npm install react-bootstrap-select --save
```

### 2. Usage
```js
React = require('react');
React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');
```
```html
<React.Bootstrap.Select>
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</React.Bootstrap.Select>
```

### 3. Demo and Documentation

See a Bootstrap 3 example [here](http://tjwebb.github.io/react-bootstrap-select).

## License
MIT

Checkout the [documentation](http://tjwebb.github.io/react-bootstrap-select) for further information.

[npm-image]: https://img.shields.io/npm/v/react-bootstrap-select.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-bootstrap-select
[daviddm-image]: http://img.shields.io/david/tjwebb/react-bootstrap-select.svg?style=flat-square
[daviddm-url]: https://david-dm.org/tjwebb/react-bootstrap-select
