# v1.14.0-beta3 (2021-04-20)

### Bug fixes edited

- [#2634] Remove IE hacks in CSS
- [#2669] Remove deprecated sass division with slash character
- [#2627] Remove "mobile-device" class on destroy
- [#2616] Fix line ending in Latvian file
- [#2600] Fix optgroup
- [#2367] Support selectedTextFormat of count > 0
- [#2585] Fixes two `TypeError` exceptions when up/down arrow pressed
- Fix `Cannot read property 'position' of undefined` error
- Fix `Cannot read property 'index' of undefined` error
- Fix several overflow bugs
- [#2659] [#2671] Fix broken Ajax search
- [#2593] Fix maxOptions bugs

### i18n
- [#2625] Add turkmen language
- [#2621] Update deselectAllText turkish translation

### New features
- [#2305] Add new CDN: PageCDN
- Support passing in a boolean `more` argument as an additional argument to the `source.data`/`source.search` callback functions

### Dev
- remove bootstrap 3 test page
- improve test pages js code
- [#2680] upgrade npm dependencies and lockfile format
- [#2617] remove dist folder from source tracking
- add actions for linting code and publishing on npm
- [#2678] Add missing semi-colons and enforce it with eslint
- [#2683] Remove polyfills and IE related code

This project is now mainly maintained by @NicolasCARPi.

[#2634]: https://github.com/snapappointments/bootstrap-select/issues/2634
[#2669]: https://github.com/snapappointments/bootstrap-select/issues/2669
[#2627]: https://github.com/snapappointments/bootstrap-select/issues/2627
[#2616]: https://github.com/snapappointments/bootstrap-select/issues/2616
[#2600]: https://github.com/snapappointments/bootstrap-select/issues/2600
[#2367]: https://github.com/snapappointments/bootstrap-select/issues/2367
[#2585]: https://github.com/snapappointments/bootstrap-select/issues/2585
[#2659]: https://github.com/snapappointments/bootstrap-select/issues/2659
[#2671]: https://github.com/snapappointments/bootstrap-select/issues/2671
[#2593]: https://github.com/snapappointments/bootstrap-select/issues/2593
[#2625]: https://github.com/snapappointments/bootstrap-select/issues/2625
[#2621]: https://github.com/snapappointments/bootstrap-select/issues/2621
[#2305]: https://github.com/snapappointments/bootstrap-select/issues/2305
[#2680]: https://github.com/snapappointments/bootstrap-select/issues/2680
[#2617]: https://github.com/snapappointments/bootstrap-select/issues/2617
[#2678]: https://github.com/snapappointments/bootstrap-select/issues/2678
[#2683]: https://github.com/snapappointments/bootstrap-select/issues/2683

# v1.14.0-beta2 (2021-03-25)

### New Features
- [#2505]: Support Bootstrap 5

### Bug Fixes
- [#2576]: use vanilla JS selector to get first option (performance)
- [#2578]: Fix allowClear so that it triggers change events

[#2505]: https://github.com/snapappointments/bootstrap-select/issues/2505
[#2576]: https://github.com/snapappointments/bootstrap-select/pull/2576
[#2578]: https://github.com/snapappointments/bootstrap-select/issues/2578

-------------------

# v1.14.0-beta (2020-11-28)

### New Features
- [#899]: Ajax/JSON data source support
- [#1315]: Reset select element when `form.reset()` is called
- [#1416], [#2147]: Using `title` to set the select's placeholder has been deprecated. Use `placeholder` instead. `title` will no longer set the placeholder starting in v2.0.0. `title` and `placeholder` can still be used together to support a placeholder and a custom title.
- [#1449]: Add `allowClear` option to support deselecting the value for single selects
- [#1893]: Add `open` and `close` methods
- [#2042]: Support assigning a function to `liveSearchStyle` for custom filtering

### Bug Fixes
- [#2507]: Placeholder doesn't work when the first option is disabled

### Breaking Changes
- [#1709]: use DOMContentLoaded event listener to auto-init bootstrap-select (performance boost)
- [#2259]: Drop IE8 support

[#899]: https://github.com/snapappointments/bootstrap-select/issues/899
[#1315]: https://github.com/snapappointments/bootstrap-select/issues/1315
[#1416]: https://github.com/snapappointments/bootstrap-select/issues/1416
[#2147]: https://github.com/snapappointments/bootstrap-select/issues/2147
[#1449]: https://github.com/snapappointments/bootstrap-select/issues/1449
[#1893]: https://github.com/snapappointments/bootstrap-select/issues/1893
[#2042]: https://github.com/snapappointments/bootstrap-select/issues/2042
[#2507]: https://github.com/snapappointments/bootstrap-select/issues/2507
[#1709]: https://github.com/snapappointments/bootstrap-select/issues/1709
[#2259]: https://github.com/snapappointments/bootstrap-select/issues/2259

-------------------

# v1.13.18 (2020-06-26)
### Bug Fixes
- [#1342]: Bootstrap select doesn't send field data on form submit (set form attribute on select element to fix)
- [#2402]: In Internet Explorer, with liveSearchPlaceholder enabled, can't select option while searchBox is focused. Also, selected option doesn't get scrolled to when opening menu
- [#2464]: title attribute does not work in 1.13.17 (Safari)
- [#2469]: Shift-Tab key not working in 1.13.17
- [#2474]: With multiple selects, cannot select options with keyboard after using mouse to select options
- [#2483]: Dropdown with unselectable index 0 will not scroll to top on arrow_down with last index selected
- [#2491]: remove placeholder/title option when destroying selectpicker

[#1342]: https://github.com/snapappointments/bootstrap-select/issues/1342
[#2402]: https://github.com/snapappointments/bootstrap-select/issues/2402
[#2464]: https://github.com/snapappointments/bootstrap-select/issues/2464
[#2469]: https://github.com/snapappointments/bootstrap-select/issues/2469
[#2474]: https://github.com/snapappointments/bootstrap-select/issues/2474
[#2483]: https://github.com/snapappointments/bootstrap-select/issues/2483
[#2491]: https://github.com/snapappointments/bootstrap-select/issues/2491

-------------------

# v1.13.17 (2020-05-07)
### Bug Fixes
- [#478]: tab key skips selectpicker inputs on Mac (Safari)
- [#1023]: if title/placeholder enabled, select value changes when pressing back in browser
- [#1828]: selectpicker('mobile') not working on iOS
- [#2448]: Incorrect dropdown style when Bootstrap 4 version is not auto detected since 1.13.13

[#478]: https://github.com/snapappointments/bootstrap-select/issues/478
[#1023]: https://github.com/snapappointments/bootstrap-select/issues/1023
[#1828]: https://github.com/snapappointments/bootstrap-select/issues/1828
[#2448]: https://github.com/snapappointments/bootstrap-select/issues/2448

-------------------

# v1.13.16 (2020-04-24)
### Bug Fixes
- [#2380]: Specifying a Title and OptGroups creates a redundant divider
- [#2381]: Tick/check mark rendering in Firefox
- [#2391]: setStyle fails if newElement.parentNode is a document fragment
- [#2393]: liHeight does not consider custom option content when computing li height
- [#2442]: Using a class in optgroup results in an error on refresh in chrome
- [#2445]: Problem with refresh and selected item
- [#2446]: Bootstrap select property dataApiKeydownHandler error

[#2380]: https://github.com/snapappointments/bootstrap-select/issues/2380
[#2381]: https://github.com/snapappointments/bootstrap-select/issues/2381
[#2391]: https://github.com/snapappointments/bootstrap-select/issues/2391
[#2393]: https://github.com/snapappointments/bootstrap-select/issues/2393
[#2442]: https://github.com/snapappointments/bootstrap-select/issues/2442
[#2445]: https://github.com/snapappointments/bootstrap-select/issues/2445
[#2446]: https://github.com/snapappointments/bootstrap-select/issues/2446

-------------------

# v1.13.15 (2020-04-20)
### Bug Fixes
- [#2430]: hasOwnProperty error with jQuery 3.5.0
- [#2439]: error setting bootstrapKeydown if Bootstrap not yet loaded

[#2430]: https://github.com/snapappointments/bootstrap-select/issues/2430
[#2439]: https://github.com/snapappointments/bootstrap-select/issues/2439

-------------------

# v1.13.14 (2020-04-17)
### Bug Fixes
- [#2436]: TypeError: Cannot read property 'content' of undefined
- [#2437]: If a select has the title attribute set (and is not a multiple select), selecting an option doesn't update the value in the button

### Translations
- [#2195]: Improve CZ translations
- [#2274]: Improve JP translations
- [#2196]: Add Serbian translations
- [#2340]: Add Thai translations

[#2436]: https://github.com/snapappointments/bootstrap-select/issues/2436
[#2437]: https://github.com/snapappointments/bootstrap-select/issues/2437

[#2195]: https://github.com/snapappointments/bootstrap-select/pull/2195
[#2274]: https://github.com/snapappointments/bootstrap-select/pull/2274
[#2196]: https://github.com/snapappointments/bootstrap-select/pull/2196
[#2340]: https://github.com/snapappointments/bootstrap-select/pull/2340

-------------------

# v1.13.13 (2020-04-16)
### Bug Fixes
- [#2339]: data-size="false" not working
- [#2337]: calling deselectAll/selectAll immediately after page load throws error
- [#2320]: Dropup becomes a dropdown upon search
- [#2308]: Keyboard control over Bootstrap Dropdown components stops working
- [#2272]: Class bs-placeholder is no longer set on "default" values in 1.13.10
- [#2352]: "Deselect All" doesn't consistently work with virtual scroll

[#2339]: https://github.com/snapappointments/bootstrap-select/issues/2339
[#2337]: https://github.com/snapappointments/bootstrap-select/issues/2337
[#2320]: https://github.com/snapappointments/bootstrap-select/issues/2320
[#2308]: https://github.com/snapappointments/bootstrap-select/issues/2308
[#2272]: https://github.com/snapappointments/bootstrap-select/issues/2272
[#2352]: https://github.com/snapappointments/bootstrap-select/issues/2352

-------------------

# v1.13.12 (2019-10-10)
### Bug Fixes
- [#2176]: allow was-validated class to work on select elements without selectpicker class
- [#2321]: CTRL + F5 not working while dropdown is open
- [#2308]: Keyboard control over Bootstrap Dropdown components stops working
- [#2275]: Bug: Event duplication on refresh
- [#2273]: "precompiled bootstrap" link is broken in README

### Improvements
- [#2243]: change liveSearch input type from "text" to "search"

[#2176]: https://github.com/snapappointments/bootstrap-select/pull/2176
[#2243]: https://github.com/snapappointments/bootstrap-select/pull/2243
[#2321]: https://github.com/snapappointments/bootstrap-select/issues/2321
[#2308]: https://github.com/snapappointments/bootstrap-select/issues/2308
[#2275]: https://github.com/snapappointments/bootstrap-select/issues/2275
[#2273]: https://github.com/snapappointments/bootstrap-select/issues/2273

-------------------

# v1.13.11 (2019-09-19)
### Bug Fixes
- [#2263]: Selecting non-existent option throws error in v1.13.10
- [#2266]: Desired width of dropdown menu breaks after resizing window
- [#2285]: bootstrap-select throws javascript error with jquery slim
- [#2289]: Multiple ticks in optgroup with data-max-options defined as "1"
- [#2326]: In IE11, options aren't visible when moving to bottom via "up" arrow key if select has an optgroup

[#2263]: https://github.com/snapappointments/bootstrap-select/issues/2263
[#2266]: https://github.com/snapappointments/bootstrap-select/issues/2266
[#2285]: https://github.com/snapappointments/bootstrap-select/issues/2285
[#2289]: https://github.com/snapappointments/bootstrap-select/issues/2289
[#2326]: https://github.com/snapappointments/bootstrap-select/issues/2326

-------------------

# v1.13.10 (2019-04-19)
### Bug Fixes
- [#1219]: Keyboard navigation not working when searching and virtualScroll is false
- [#2109]: elements with .form-control class don't adjust height properly since Bootstrap 4.1.3
- [#2126]: showTick option not working as expected
- [#2153]: Screen reader doesn't read elements in expanded list (NVDA and JAWS)
- [#2251]: A standard select with a selected option doesn't scroll to the selected option if inside an optgroup
- [#2253]: hideDisabled and selectedTextFormat: count not working correctly if disabled options are selected
- [#2256]: selected option styling is not updated if .selectpicker('val', x) is called while dropdown menu is open
- [#2258]: menu size doesn't update when virtualScroll is disabled while the menu is open

[#1219]: https://github.com/snapappointments/bootstrap-select/issues/1219
[#2109]: https://github.com/snapappointments/bootstrap-select/issues/2109
[#2126]: https://github.com/snapappointments/bootstrap-select/issues/2126
[#2153]: https://github.com/snapappointments/bootstrap-select/issues/2153
[#2251]: https://github.com/snapappointments/bootstrap-select/issues/2251
[#2253]: https://github.com/snapappointments/bootstrap-select/issues/2253
[#2256]: https://github.com/snapappointments/bootstrap-select/issues/2256
[#2258]: https://github.com/snapappointments/bootstrap-select/issues/2258

-------------------

# v1.13.9 (2019-03-29)
### Bug Fixes
- [#2022]: selected class is not removed properly when virtualScroll is disabled and choosing options at the bottom of the select
- [#2106]: setting BootstrapVersion option still shows console warning
- [#2126]: setting show-tick class doesn't work
- [#2232]: Every 'refresh' appends a new span.check-mark
- [#2233]: server-side error: HTMLSelectElement is not defined
- [#2234]: position bootstrap-select behind input field
- [#2235]: Mobile native menu not accessible
- [#2236]: JS errors are thrown when using bootstrap select on js-generated select (after calling destroy())
- [#2239]: Setting styleBase and empty style result in exception
- [#2244]: val() method fires changed.bs.select, but the select's previousValue is not passed through
- [#2245]: some default Bootstrap 4 styles are not being set when using BootstrapVersion
- [#2248]: width: fit in IE collapses button with text overflowing

[#2022]: https://github.com/snapappointments/bootstrap-select/issues/2022
[#2106]: https://github.com/snapappointments/bootstrap-select/issues/2106
[#2126]: https://github.com/snapappointments/bootstrap-select/issues/2126
[#2232]: https://github.com/snapappointments/bootstrap-select/issues/2232
[#2233]: https://github.com/snapappointments/bootstrap-select/issues/2233
[#2234]: https://github.com/snapappointments/bootstrap-select/issues/2234
[#2235]: https://github.com/snapappointments/bootstrap-select/issues/2235
[#2236]: https://github.com/snapappointments/bootstrap-select/issues/2236
[#2239]: https://github.com/snapappointments/bootstrap-select/issues/2239
[#2244]: https://github.com/snapappointments/bootstrap-select/issues/2244
[#2245]: https://github.com/snapappointments/bootstrap-select/issues/2245
[#2248]: https://github.com/snapappointments/bootstrap-select/issues/2248

-------------------

# v1.13.8 (2019-03-15)
### Bug Fixes
- [#1969]: Does not work with form-inline from bootstrap
- [#2229]: The height of menu is calculated incorrectly with extra css
- [#2231]: Sanitizer error on large single selects without virtualScroll and one option selected

[#1969]: https://github.com/snapappointments/bootstrap-select/issues/1969
[#2229]: https://github.com/snapappointments/bootstrap-select/issues/2229
[#2231]: https://github.com/snapappointments/bootstrap-select/issues/2231

-------------------

# v1.13.7 (2019-03-12)
### Bug Fixes
- [#2046]: val() method incorrectly fires a native change event
- [#2109]: The height of the select doesn't auto-size with multi-line options
- [#2213]: button height wrong if using an older doctype
- [#2220]: js folder missing in bower_components/bootstrap-select/dist
- [#2221]: style option can no longer include multiple styles
- [#2224]: auto width (data-width="auto") not working
- [#2226]: Selecting option by typing is not working correctly

[#2046]: https://github.com/snapappointments/bootstrap-select/issues/2046
[#2109]: https://github.com/snapappointments/bootstrap-select/issues/2109
[#2213]: https://github.com/snapappointments/bootstrap-select/issues/2213
[#2220]: https://github.com/snapappointments/bootstrap-select/issues/2220
[#2221]: https://github.com/snapappointments/bootstrap-select/issues/2221
[#2224]: https://github.com/snapappointments/bootstrap-select/issues/2224
[#2226]: https://github.com/snapappointments/bootstrap-select/issues/2226

-------------------

# v1.13.6 (2019-03-08)
### Bug Fixes
- [#1321]: remove extra files from bower release
- [#1665]: performance improvements
- [#1832]: use `on` and `trigger` event handlers instead of `click` and `change` shorthand
- [#2078]: Elements in an input group below a selectpicker have a higher z-index, causing them to appear above the opened menu
- [#2150]: Live search discards the first typed character
- [#2163]: Cannot read property 'top' of undefined (ensure container exists)
- [#2166]: Sub options display separately instead of as 1 list
- [#2187]: move bulk of logic into a setTimeout for faster page load
- [#2189]: Empty select refresh error "Cannot read property 'classList' of undefined"
- [#2198]: "Cannot read property '0' of undefined" when dropupAuto is false and the select is at the bottom of the page
- [#2199]: Escaped tags parsed as non-escaped in title and data-content
- [#2202]: always update menu size after updates to live search
- [#2206]: Map file for minified js version does not work correctly
- [#2210]: An extra divider is added if an optgroup is the last visible element and there are hidden options after it
- [#2217]: The bottom divider of an optgroup disappears when searching and one of the options in the optgroup is hidden

### Security
- [#2199]: Fixed an XSS vulnerability with data-content, data-subtext, and title options. Implemented a new HTML sanitizer for data-content.

[#1321]: https://github.com/snapappointments/bootstrap-select/issues/1321
[#1665]: https://github.com/snapappointments/bootstrap-select/issues/1665
[#1832]: https://github.com/snapappointments/bootstrap-select/issues/1832
[#2078]: https://github.com/snapappointments/bootstrap-select/issues/2078
[#2150]: https://github.com/snapappointments/bootstrap-select/issues/2150
[#2163]: https://github.com/snapappointments/bootstrap-select/issues/2163
[#2166]: https://github.com/snapappointments/bootstrap-select/issues/2166
[#2187]: https://github.com/snapappointments/bootstrap-select/issues/2187
[#2189]: https://github.com/snapappointments/bootstrap-select/issues/2189
[#2198]: https://github.com/snapappointments/bootstrap-select/issues/2198
[#2199]: https://github.com/snapappointments/bootstrap-select/issues/2199
[#2202]: https://github.com/snapappointments/bootstrap-select/issues/2202
[#2206]: https://github.com/snapappointments/bootstrap-select/issues/2206
[#2210]: https://github.com/snapappointments/bootstrap-select/issues/2210
[#2217]: https://github.com/snapappointments/bootstrap-select/issues/2217
[#2199]: https://github.com/snapappointments/bootstrap-select/issues/2199

-------------------

# v1.13.5 (2018-12-11)
### Bug Fixes
- [#2160]: Selects with a title option throw an error in the render function

[#2160]: https://github.com/snapappointments/bootstrap-select/issues/2160

-------------------

# v1.13.4 (2018-12-11)

### Bug Fixes
- [#1710]: When listening for keydown event on .bs-searchbox, ensure it is a child of .bootstrap-select
- [#1943]: Option dropdownAlignRight auto doesn't work
- [#2034]: Uncaught TypeError: Cannot read property '0' of undefined
- [#2082]: button vertical alignment
- [#2105]: Dynamically added picker causes resize JS error
- [#2118]: Memory leak: getPlacement resize & scroll
- [#2140]: data-hidden broken in v1.13.0
- [#2151]: This plugins broken when the version of IE below 10

### Documentation
- [#2125]: add styleBase option to documentation

### New Features
- [#767], [#1876], [#2026]: Improve/expand liveSearchNormalize
- [#2120], [#2121], [#2152] - replace JSHint with ESLint (clean up code)
- [#1910]: Amharic locale
- [#1926]: Latvian locale

[#767]: https://github.com/snapappointments/bootstrap-select/issues/767
[#1876]: https://github.com/snapappointments/bootstrap-select/issues/1876
[#2026]: https://github.com/snapappointments/bootstrap-select/issues/2026
[#1710]: https://github.com/snapappointments/bootstrap-select/issues/1710
[#1943]: https://github.com/snapappointments/bootstrap-select/issues/1943
[#2034]: https://github.com/snapappointments/bootstrap-select/issues/2034
[#2082]: https://github.com/snapappointments/bootstrap-select/issues/2082
[#2105]: https://github.com/snapappointments/bootstrap-select/issues/2105
[#2118]: https://github.com/snapappointments/bootstrap-select/issues/2118
[#2140]: https://github.com/snapappointments/bootstrap-select/issues/2140
[#2151]: https://github.com/snapappointments/bootstrap-select/issues/2151
[#2125]: https://github.com/snapappointments/bootstrap-select/issues/2125

[#1910]: https://github.com/snapappointments/bootstrap-select/pull/1910
[#1926]: https://github.com/snapappointments/bootstrap-select/pull/1926
[#2120]: https://github.com/snapappointments/bootstrap-select/pull/2120
[#2121]: https://github.com/snapappointments/bootstrap-select/pull/2121
[#2152]: https://github.com/snapappointments/bootstrap-select/pull/2152

-------------------

# v1.13.3 (2018-10-15)

### Bug Fixes
- [#1425]: Don't render checkMark (tickIcon) if showTick is false or the select is not multiple
- [#1828]: Select not working on mobile
- [#2045]: 'auto' width not working
- [#2086]: Cannot read property 'display' of undefined
- [#2092]: Cannot read property 'className' of undefined
- [#2101]: Extra tick mark when using livesearch in Bootstrap 4

[#1425]: https://github.com/snapappointments/bootstrap-select/issues/1425
[#1828]: https://github.com/snapappointments/bootstrap-select/issues/1828
[#2045]: https://github.com/snapappointments/bootstrap-select/issues/2045
[#2086]: https://github.com/snapappointments/bootstrap-select/issues/2086
[#2092]: https://github.com/snapappointments/bootstrap-select/issues/2092
[#2101]: https://github.com/snapappointments/bootstrap-select/issues/2101

-------------------

# v1.13.2 (2018-08-27)

### Bug Fixes
- [#1999]: selected styling removed from previous option in a multiselect
- [#2024]: Arrow down key doesn't scroll the view to the top when virtualScroll is disabled
- [#2027]: data-max-options="1" not removing selected class
- [#2029]: LiveSearch and "Select All" selects too many options
- [#2033]: Dividers broken on bootstrap 4
- [#2035]: Selectbox with live search throwing error when UP/DOWN key is pressed
- [#2038]: Select / Deselect All buttons are modifying disabled options
- [#2044]: When data-container is set, first click resets scroll position
- [#2045]: 'auto' width not working
- [#2047]: Optgroup labels are escaped
- [#2058]: Menu hight is not properly calculated when using data-size and styling the options' height
- [#2079]: Subtext is difficult to read on active options

### New Features
- [#1972]: add option to manually specify Bootstrap's version
- [#2036]: Add support for Bootstrap dropdown's display property added in v4.1.0

[#1999]: https://github.com/snapappointments/bootstrap-select/issues/1999
[#2024]: https://github.com/snapappointments/bootstrap-select/issues/2024
[#2027]: https://github.com/snapappointments/bootstrap-select/issues/2027
[#2029]: https://github.com/snapappointments/bootstrap-select/issues/2029
[#2033]: https://github.com/snapappointments/bootstrap-select/issues/2033
[#2035]: https://github.com/snapappointments/bootstrap-select/issues/2035
[#2038]: https://github.com/snapappointments/bootstrap-select/issues/2038
[#2044]: https://github.com/snapappointments/bootstrap-select/issues/2044
[#2045]: https://github.com/snapappointments/bootstrap-select/issues/2045
[#2047]: https://github.com/snapappointments/bootstrap-select/issues/2047
[#2058]: https://github.com/snapappointments/bootstrap-select/issues/2058
[#2079]: https://github.com/snapappointments/bootstrap-select/issues/2079
[#1972]: https://github.com/snapappointments/bootstrap-select/issues/1972
[#2036]: https://github.com/snapappointments/bootstrap-select/issues/2036

-------------------

# v1.13.1 (2018-04-23)

### Bug Fixes
- [#2076]: HTML content in the subtext get escaped in 1.13.0
- [#2073]: Error retrieving Bootstrap version
- [#2073]: Bower description is too long
- [#2071]: noneSelectedText not working

[#2076]: https://github.com/snapappointments/bootstrap-select/issues/2076
[#2073]: https://github.com/snapappointments/bootstrap-select/issues/2073
[#2073]: https://github.com/snapappointments/bootstrap-select/issues/2073
[#2071]: https://github.com/snapappointments/bootstrap-select/issues/2071

-------------------

# v1.13.0 (2018-04-19)

### Bug Fixes
- [#2060]: form control sizing classes not working
- fix sass variable syntax
- [#2062]: popper error when bootstrap-select is in a navbar
- [#1913]: `&nbsp;` causing formatting errors on MacOS
- [#2061]: unnecessary caret code with Bootstrap 4
- [#2065]: .empty() method is not working
- [#2063]: New-lines in options cause formatting issues with title attribute (if multiple options selected)
- [#2064]: Purely numeric `data-subtext` breaks live search
- [#2066]: Button padding when using data-width="fit" is incorrect
- [#2067]: input group addons not displaying properly
- [#2077]: selectAll performance in Edge is abysmal
- [#2074]: show-menu-arrow not displaying properly
- [#2068]: Bootstrap 4 validation pseudo classes not being applied properly when new options are appended dynamically
- [#2070]: popover-title is not popover-header in Bootstrap 4
- [#2075]: liveSearch with data-content not working
- [#2072]: Button text breaks to the next line when using form-control as styleBase (Bootstrap 4)
- [#2069]: Placeholder text is unreadable on darker buttons (btn-primary, btn-success, etc.)
- [#1691]: XSS vulnerability in option title

### New Features
- [#1404], [#1697]: changed.bs.select now passes through previousValue as the third parameter (instead of the previous value of the option, which was redundant). This is the value of the select prior to being changed.
- update jQuery range to make v1.9.1 the minimum (and exclude version 4)

[#2060]: https://github.com/snapappointments/bootstrap-select/issues/2060
[#2062]: https://github.com/snapappointments/bootstrap-select/issues/2062
[#1913]: https://github.com/snapappointments/bootstrap-select/issues/1913
[#2061]: https://github.com/snapappointments/bootstrap-select/issues/2061
[#2065]: https://github.com/snapappointments/bootstrap-select/issues/2065
[#2063]: https://github.com/snapappointments/bootstrap-select/issues/2063
[#2064]: https://github.com/snapappointments/bootstrap-select/issues/2064
[#2066]: https://github.com/snapappointments/bootstrap-select/issues/2066
[#2067]: https://github.com/snapappointments/bootstrap-select/issues/2067
[#2077]: https://github.com/snapappointments/bootstrap-select/issues/2077
[#2074]: https://github.com/snapappointments/bootstrap-select/issues/2074
[#2068]: https://github.com/snapappointments/bootstrap-select/issues/2068
[#2070]: https://github.com/snapappointments/bootstrap-select/issues/2070
[#2075]: https://github.com/snapappointments/bootstrap-select/issues/2075
[#2072]: https://github.com/snapappointments/bootstrap-select/issues/2072
[#2069]: https://github.com/snapappointments/bootstrap-select/issues/2069
[#1691]: https://github.com/snapappointments/bootstrap-select/issues/1691
[#1404]: https://github.com/snapappointments/bootstrap-select/issues/1404
[#1697]: https://github.com/snapappointments/bootstrap-select/issues/1697

-------------------

# v1.13.0-beta (2018-02-12)

### Bug Fixes
- [#1034]: Issue with long option inside input-group

### New Features
- [#1135]: Support Bootstrap 4 (via auto-detection)
- virtualization is now optional via `virtualScroll`. Can be set to false, true, or an integer to only use virtualization if the select has more than the specified number of options. Defaults to 600.
- update docs to support MkDocs v0.17.0

[#1034]: https://github.com/snapappointments/bootstrap-select/issues/1034
[#1135]: https://github.com/snapappointments/bootstrap-select/issues/1135

-------------------

# v1.13.0-alpha (2017-07-28)

### Bug Fixes
- [#1303]: val() method doesn't fire changed.bs.select
- [#1383]: Croatian locale is not cro_CRO. Renamed to hr_HR
- [#1395]: title option position not correct when adding options dynamically
- [#1398]: trigger setSize on refresh event
- [#1674]: Fix li tags inside option being treated as options
- [#1692]: Live Search Box Not Cleared After Selection

### New Features
- [#710]: focus on selectpicker triggers focus on actual select, allowing for event listeners
- [#1110]: 'active' class is only applied when liveSearch is on
- [#1229]: Large lists and virtualization
- [#1687]: Improve init performance

[#1303]: https://github.com/snapappointments/bootstrap-select/issues/1303
[#1383]: https://github.com/snapappointments/bootstrap-select/issues/1383
[#1395]: https://github.com/snapappointments/bootstrap-select/issues/1395
[#1398]: https://github.com/snapappointments/bootstrap-select/issues/1398
[#1674]: https://github.com/snapappointments/bootstrap-select/issues/1674
[#1692]: https://github.com/snapappointments/bootstrap-select/issues/1692
[#710]: https://github.com/snapappointments/bootstrap-select/issues/710
[#1110]: https://github.com/snapappointments/bootstrap-select/issues/1110
[#1229]: https://github.com/snapappointments/bootstrap-select/issues/1229
[#1687]: https://github.com/snapappointments/bootstrap-select/issues/1687

-------------------

# v1.12.4 (2017-07-19)

### Bug Fixes
- [#1286]: Event creation throws illegal constructor error on stock Android Browser < 5.0
- [#1764]: Bootstrap-select steals focus on form.checkValidity

[#1286]: https://github.com/snapappointments/bootstrap-select/issues/1286
[#1764]: https://github.com/snapappointments/bootstrap-select/issues/1764

-------------------

# v1.12.3 (2017-07-06)

### Bug Fixes
- [#1529]: add selectAllText and deselectAllText to translation files (used Google Translate)
- [#1604]: Keydown improvements
- [#1630]: htmlEscape inline style
- [#1631]: Livesearch performance

### New Features
- Add/update various translations

[#1529]: https://github.com/snapappointments/bootstrap-select/issues/1529
[#1604]: https://github.com/snapappointments/bootstrap-select/pull/1604
[#1630]: https://github.com/snapappointments/bootstrap-select/issues/1630
[#1631]: https://github.com/snapappointments/bootstrap-select/pull/1631

-------------------

# v1.12.2 (2017-01-30)

### Bug Fixes
* [#1563]: key word searching broken in [#1516].
* [#1570]: properly adjust size when inside form-group-sm or form-group-lg
* [#1590]: menu height calculated improperly when using liveSearch and input has custom height

[#1563]: https://github.com/snapappointments/bootstrap-select/issues/1563
[#1570]: https://github.com/snapappointments/bootstrap-select/issues/1570
[#1590]: https://github.com/snapappointments/bootstrap-select/issues/1590

-------------------

# v1.12.1 (2016-11-22)

### Bug Fixes
* [#1167], [#1366]: using a method before initializing bootstrap-select throws an error

[#1167]: https://github.com/snapappointments/bootstrap-select/issues/1167
[#1366]: https://github.com/snapappointments/bootstrap-select/issues/1366

-------------------

# v1.12.0 (2016-11-18)

### Bug Fixes
* [#1220]: unescape button title
* [#1348]: escape HTML for optgroup label
* [#1506]: Fix bs-placeholder usage for jQuery>=3.0
* [#1509]: inline style Content Security Policy
* [#1477]: using liveSearchNormalize and liveSearchStyle="startsWith" simultaneously breaks search
* [#1489] fix selectOnTab with liveSearch enabled which was broken when [#1489] was fixed
* [#1533]: remove touchstart event listener (issues with FastClick)
* remove destroyLi function - improve refresh() performance
* [#1531]: add Spanish (Spain) translations
* [#1553]: don't use replace in normalizeToBase if text is undefined (throws error otherwise)

### New Features
* [#1503]: Add windowPadding option (either a number or an array of numbers - [top, right, bottom, left])
* [#1516]: Improve liveSearch performance (addresses [#1275])
* [#1440]: allow HTML in placeholder title for non-multiple selects
* [#1555]: Use default with SCSS variables

[#1220]: https://github.com/snapappointments/bootstrap-select/issues/1220
[#1275]: https://github.com/snapappointments/bootstrap-select/issues/1275
[#1348]: https://github.com/snapappointments/bootstrap-select/issues/1348
[#1506]: https://github.com/snapappointments/bootstrap-select/issues/1506
[#1509]: https://github.com/snapappointments/bootstrap-select/issues/1509
[#1477]: https://github.com/snapappointments/bootstrap-select/issues/1477
[#1489]: https://github.com/snapappointments/bootstrap-select/issues/1489
[#1533]: https://github.com/snapappointments/bootstrap-select/issues/1533
[#1531]: https://github.com/snapappointments/bootstrap-select/issues/1531
[#1503]: https://github.com/snapappointments/bootstrap-select/issues/1503
[#1516]: https://github.com/snapappointments/bootstrap-select/issues/1516
[#1440]: https://github.com/snapappointments/bootstrap-select/issues/1440
[#1553]: https://github.com/snapappointments/bootstrap-select/issues/1553
[#1555]: https://github.com/snapappointments/bootstrap-select/issues/1555

-------------------

# v1.11.2 (2016-09-09)

### Bug Fixes
* fix sourceMappingURL in bootstrap-select.min.js

-------------------

# v1.11.1 (2016-09-09)

### Bug Fixes
* [#1475]: fix Cannot read property 'apply' of null error
* [#1484]: Change events fire twice on IE8
* [#1489]: hide.bs.select and hidden.bs.select events not fired when "Esc" key pressed with live search enabled

[#1475]: https://github.com/snapappointments/bootstrap-select/issues/1475
[#1484]: https://github.com/snapappointments/bootstrap-select/issues/1484
[#1489]: https://github.com/snapappointments/bootstrap-select/issues/1489

-------------------

# v1.11.0 (2016-08-16)

### Bug Fixes
* [#1291]: don't trigger change event if selecting an option that passes the limit
* [#1284]: check if all options are already selected/deselected before triggering changed/changed.bs.select
* [#1245], [#1310]: With livesearch, when keypress, focus to search field isn't working with some characters
* [#1257]: fix issue with Norwegian translation
* [#1346]: fix edge case where default values are not respected when initializing the plugin
* [#1338]: improve support for disabled optgroups and hidden options
* [#1373]: prevent selectAll and deselectAll from being called on standard select boxes
* [#1363]: if hideDisabled is enabled, and all options in an optgroup are disabled, the optgroup is still visible
* [#1422]: fix menu position inside a scrolling container
* [#1451]: fix select with input-group-addon on both sides
* [#1465]: changed.bs.select not firing for native mobile menu
* [#1459]: jQuery 3 support - $.expr[':'] -> $.expr.pseudos

### New Features
* [#1139]: add placeholder styling via `bs-placeholder` class
* [#1290]: auto close the menu if maxOptions is set to 1 (instead of leaving open)
* [#1127], [#1016], [#1160], [#1269]: add 'auto' option for dropdownAlignRight
* [58ed408]: support using a string for maxOptionsText
* [#541]: ARIA - Accessibility

[#1291]: https://github.com/snapappointments/bootstrap-select/issues/1291
[#1284]: https://github.com/snapappointments/bootstrap-select/issues/1284
[#1245]: https://github.com/snapappointments/bootstrap-select/issues/1245
[#1257]: https://github.com/snapappointments/bootstrap-select/issues/1257
[#1310]: https://github.com/snapappointments/bootstrap-select/issues/1310
[#1346]: https://github.com/snapappointments/bootstrap-select/issues/1346
[#1338]: https://github.com/snapappointments/bootstrap-select/issues/1338
[#1373]: https://github.com/snapappointments/bootstrap-select/issues/1373
[#1363]: https://github.com/snapappointments/bootstrap-select/issues/1363
[#1422]: https://github.com/snapappointments/bootstrap-select/issues/1422
[#1451]: https://github.com/snapappointments/bootstrap-select/issues/1451
[#1465]: https://github.com/snapappointments/bootstrap-select/issues/1465
[#1459]: https://github.com/snapappointments/bootstrap-select/issues/1459
[#1139]: https://github.com/snapappointments/bootstrap-select/issues/1139
[#1290]: https://github.com/snapappointments/bootstrap-select/issues/1290
[#1127]: https://github.com/snapappointments/bootstrap-select/issues/1127
[#1016]: https://github.com/snapappointments/bootstrap-select/issues/1016
[#1160]: https://github.com/snapappointments/bootstrap-select/issues/1160
[#1269]: https://github.com/snapappointments/bootstrap-select/issues/1269
[58ed408]: https://github.com/snapappointments/bootstrap-select/commit/58ed4085019526141be07beeada37788dfe2d316
[#541]: https://github.com/snapappointments/bootstrap-select/issues/541

-------------------

# v1.10.0 (2016-02-17)

### Bug Fixes
* [#1268]: performance bug in clickListener
* [#1273]: html5 validation message disappears in Chrome 47+
* [#1295]: hide select by default (so there is no flash of unstyled content)

### New Features
* [#950]: add `.selectpicker('toggle')` method to allow menu to be open/closed programmatically
* [#1272]: add showTick option
* [#1284]: selectAll and deselectAll now trigger the `changed.bs.select` event

Add Lithuanian translations.

[#1268]: https://github.com/snapappointments/bootstrap-select/issues/1268
[#1273]: https://github.com/snapappointments/bootstrap-select/issues/1273
[#1295]: https://github.com/snapappointments/bootstrap-select/issues/1295
[#950]: https://github.com/snapappointments/bootstrap-select/issues/950
[#1272]: https://github.com/snapappointments/bootstrap-select/issues/1272
[#1284]: https://github.com/snapappointments/bootstrap-select/issues/1284

-------------------

# v1.9.4 (2016-01-18)

### Bug fixes
* [#1250]: don't destroy original select when using `destroy` method
* [#1230]: Optgroup label missing when first option is disabled and `hideDisabled` is true

Add new translations.

[#1250]: https://github.com/snapappointments/bootstrap-select/issues/1250
[#1230]: https://github.com/snapappointments/bootstrap-select/issues/1230

-------------------

# v1.9.3 (2015-12-16)

### Bug fixes
* Fix [#1235] - issue with selects that had `form-control` class

[#1235]: https://github.com/snapappointments/bootstrap-select/issues/1235
