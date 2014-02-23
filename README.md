[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
Twitter Bootstrap Select
================

A custom select / multiselect for Twitter bootstrap using button dropdown, designed to behave like regular Bootstrap selects;

## Demo and Documentation

See an  example [here](http://plugins.upbootstrap.com/bootstrap-select/).

Required
-----------------
* Twitter Bootstrap 3.0+
* jQuery 1.8+

Installation
-----------------
#### Download [jQuery](http://docs.jquery.com/Downloading_jQuery)
* [Download the latest release](http://docs.jquery.com/Downloading_jQuery)
* [Clone in Windows](github-windows://openRepo/https://github.com/jquery/jquery)
* Clone the repo: `git clone git://github.com/jquery/jquery.git`.

#### Download [Bootstrap](https://github.com/twitter/bootstrap)
* [Download the latest release](https://github.com/twitter/bootstrap/zipball/master).
* [Clone in Windows](github-windows://openRepo/https://github.com/twitter/bootstrap)
* Clone the repo: `git clone git://github.com/twitter/bootstrap.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install bootstrap`.

#### Download this plugin.
* [Download the latest release](https://github.com/biggora/bootstrap-select/zipball/master)
* [Clone in Windows](github-windows://openRepo/https://github.com/biggora/bootstrap-select)
* Clone the repo: `git clone git://github.com/biggora/bootstrap-select.git`
* Install with Bower: `bower install bs-select`

#### Include files in your HTML. The minimum required for this plugin are:

    <link href="/path/to/bootstrap.css" rel="stylesheet">
    <link href="/path/to/bootstrap-select.css" rel="stylesheet">
    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/bootstrap-select.js" type="text/javascript"></script>

## Usage

Create your `<select>` with the `.selectpicker` class.
```html
    <select class="selectpicker">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Barbecue</option>
    </select>
```    
Enable Bootstrap-Select via JavaScript:
```js
    $('.selectpicker').selectpicker();
```
Or just
```js
    $('select').selectpicker();
```
Checkout the [documentation](http://silviomoreto.github.com/bootstrap-select/) for further information.

### Compiling CSS and JavaScript

Bootstrap Select uses [Grunt](http://gruntjs.com/) with convenient methods. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

#### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/bootstrap-select` directory, then run `npm install`. npm will look at [package.json](https://github.com/biggora/bootstrap-select/blob/master/package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

#### Install Bower

From the command line:

1. Install `bower` globally with `npm install -g bower`.
2. Navigate to the root `/bootstrap-select` directory, then run `bower install`. bower will look at [package.json](https://github.com/twbs/bootstrap/blob/master/bower.json) and automatically install the necessary local dependencies listed there.

#### Available Grunt commands

##### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/js` and `/css`. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

##### Compile all CSS and JavaScript - `grunt build`
`grunt build` creates the `/js` and `/css` directories with compiled files. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

##### Only compile CSS - `grunt build-css`
`grunt build-css` creates the `/css` directory with compiled files. **Uses [Less](http://lesscss.org/).**

##### Only compile JavaScript - `grunt build-js`
`grunt build-js` creates the `/js` directory with compiled files. **Uses [UglifyJS](http://lisperator.net/uglifyjs/).**


## Authors

[Silvio Moreto](http://github.com/silviomoreto),
[Ana Carolina](http://github.com/anacarolinats),
[caseyjhol](https://github.com/caseyjhol), 
[Matt Bryson](https://github.com/mattbryson), and
[Alexey Gordeyev](https://github.com/biggora).

### Recommend extensions

- [Bootstrap Ajax Typeahead Plugin](http://biggora.github.io/bootstrap-ajax-typeahead/)
- [Bootstrap Fancy File Plugin](http://biggora.github.io/bootstrap-fancyfile/)
- [Bootstrap Slider Plugin](http://biggora.github.io/bootstrap-slider/)
- [TrinteJS - Javascrpt MVC Framework for Node.JS](http://www.trintejs.com/)
- [CaminteJS - Cross-db ORM for NodeJS](http://www.camintejs.com/)
- [MongoDB Session Storage for ExpressJS](https://github.com/biggora/express-mongodb)
- [Middleware exposing user-agent for NodeJS](https://github.com/biggora/express-useragent)
- [2CO NodeJS adapter for 2checkout API payment gateway](https://github.com/biggora/2co)

## Copyright and license

(The MIT License)

Copyright (C) 2013-2014 Silvio Moreto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Resources

- Visit the [author website](http://www.gordejev.lv).
- Follow [@biggora](https://twitter.com/#!/biggora) on Twitter for updates.
- Report issues on the [github issues](https://github.com/biggora/bootstrap-select/issues) page.

[![Analytics](https://ga-beacon.appspot.com/UA-22788134-5/select/readme)](https://github.com/igrigorik/ga-beacon)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/biggora/bootstrap-select/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

