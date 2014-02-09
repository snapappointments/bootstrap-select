$(function() {

    module('selectpicker');

    test('should provide no conflict', function() {
        var selectpicker = $.fn.selectpicker.noConflict();
        ok(!$.fn.selectpicker, 'selectpicker was set back to undefined (org value)');
        $.fn.selectpicker = selectpicker;
    });

    test('should be defined on jquery object', function() {
        ok($(document.body).selectpicker, 'selectpicker method is defined');
    });

    test('should return element', function() {
        var el = $('<div />');
        ok(el.selectpicker()[0] === el[0], 'same element returned');
    });

    test('should not open dropdown if target is disabled', function() {
        var dropdownHTML = '<ul class="tabs">' +
                '<li class="dropdown">' +
                '<button disabled href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>' +
                '<ul class="dropdown-menu">' +
                '<li><a href="#">Secondary link</a></li>' +
                '<li><a href="#">Something else here</a></li>' +
                '<li class="divider"></li>' +
                '<li><a href="#">Another link</a></li>' +
                '</ul>' +
                '</li>' +
                '</ul>',
                selectpicker = $(dropdownHTML).find('[data-toggle="dropdown"]').selectpicker().click();

        ok(!selectpicker.parent('.dropdown').hasClass('open'), 'open class added on click');
    });

    test('should not open dropdown if target is disabled', function() {
        var dropdownHTML = '<ul class="tabs">' +
                '<li class="dropdown">' +
                '<button href="#" class="btn dropdown-toggle disabled" data-toggle="dropdown">Dropdown</button>' +
                '<ul class="dropdown-menu">' +
                '<li><a href="#">Secondary link</a></li>' +
                '<li><a href="#">Something else here</a></li>' +
                '<li class="divider"></li>' +
                '<li><a href="#">Another link</a></li>' +
                '</ul>' +
                '</li>' +
                '</ul>',
                selectpicker = $(dropdownHTML).find('[data-toggle="dropdown"]').selectpicker().click();

        ok(!selectpicker.parent('.dropdown').hasClass('open'), 'open class added on click');
    });

    test('should add class open to menu if clicked', function() {
        var dropdownHTML = '<div class="container">' +
                '<select class="selectpicker">' +
                '<option>Mustard</option>' +
                '<option>Ketchup</option>' +
                '<option>Relish</option>' +
                '</select></div>',
                selectpicker = $(dropdownHTML).find('.selectpicker').selectpicker();
                
                selectpicker.parent('.container').find('.bootstrap-select').click();
            console.log(selectpicker.parent('.container').find('.bootstrap-select').click())
            $('body').append(selectpicker.parent('.container'))
        ok(selectpicker.parent('.container').find('.bootstrap-select').hasClass('open'), 'open class added on click');
    });
    /*
     test('should test if element has a # before assuming it\'s a selector', function () {
     var dropdownHTML = '<ul class="tabs">' +
     '<li class="dropdown">' +
     '<a href="/foo/" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>' +
     '<ul class="dropdown-menu">' +
     '<li><a href="#">Secondary link</a></li>' +
     '<li><a href="#">Something else here</a></li>' +
     '<li class="divider"></li>' +
     '<li><a href="#">Another link</a></li>' +
     '</ul>' +
     '</li>' +
     '</ul>',
     dropdown = $(dropdownHTML).find('[data-toggle="dropdown"]').dropdown().click()
     
     ok(dropdown.parent('.dropdown').hasClass('open'), 'open class added on click')
     })
     
     
     test('should remove open class if body clicked', function () {
     var dropdownHTML = '<ul class="tabs">' +
     '<li class="dropdown">' +
     '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>' +
     '<ul class="dropdown-menu">' +
     '<li><a href="#">Secondary link</a></li>' +
     '<li><a href="#">Something else here</a></li>' +
     '<li class="divider"></li>' +
     '<li><a href="#">Another link</a></li>' +
     '</ul>' +
     '</li>' +
     '</ul>',
     dropdown = $(dropdownHTML)
     .appendTo('#qunit-fixture')
     .find('[data-toggle="dropdown"]')
     .dropdown()
     .click()
     
     ok(dropdown.parent('.dropdown').hasClass('open'), 'open class added on click')
     $('body').click()
     ok(!dropdown.parent('.dropdown').hasClass('open'), 'open class removed')
     dropdown.remove()
     })
     
     test('should remove open class if body clicked, with multiple drop downs', function () {
     var dropdownHTML = '<ul class="nav">' +
     '    <li><a href="#menu1">Menu 1</a></li>' +
     '    <li class="dropdown" id="testmenu">' +
     '      <a class="dropdown-toggle" data-toggle="dropdown" href="#testmenu">Test menu <b class="caret"></b></a>' +
     '      <ul class="dropdown-menu" role="menu">' +
     '        <li><a href="#sub1">Submenu 1</a></li>' +
     '      </ul>' +
     '    </li>' +
     '</ul>' +
     '<div class="btn-group">' +
     '    <button class="btn">Actions</button>' +
     '    <button class="btn dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>' +
     '    <ul class="dropdown-menu">' +
     '        <li><a href="#">Action 1</a></li>' +
     '    </ul>' +
     '</div>',
     dropdowns = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-toggle="dropdown"]'),
     first = dropdowns.first(),
     last = dropdowns.last()
     
     ok(dropdowns.length === 2, 'Should be two dropdowns')
     
     first.click()
     ok(first.parents('.open').length === 1, 'open class added on click')
     ok($('#qunit-fixture .open').length === 1, 'only one object is open')
     $('body').click()
     ok($('#qunit-fixture .open').length === 0, 'open class removed')
     
     last.click()
     ok(last.parent('.open').length === 1, 'open class added on click')
     ok($('#qunit-fixture .open').length === 1, 'only one object is open')
     $('body').click()
     ok($('#qunit-fixture .open').length === 0, 'open class removed')
     
     $('#qunit-fixture').html('')
     })
     
     test('should fire show and hide event', function () {
     var dropdownHTML = '<ul class="tabs">' +
     '<li class="dropdown">' +
     '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>' +
     '<ul class="dropdown-menu">' +
     '<li><a href="#">Secondary link</a></li>' +
     '<li><a href="#">Something else here</a></li>' +
     '<li class="divider"></li>' +
     '<li><a href="#">Another link</a></li>' +
     '</ul>' +
     '</li>' +
     '</ul>',
     dropdown = $(dropdownHTML)
     .appendTo('#qunit-fixture')
     .find('[data-toggle="dropdown"]')
     .dropdown()
     
     stop()
     
     dropdown
     .parent('.dropdown')
     .bind('show.bs.dropdown', function () {
     ok(true, 'show was called')
     })
     .bind('hide.bs.dropdown', function () {
     ok(true, 'hide was called')
     start()
     })
     
     dropdown.click()
     $(document.body).click()
     })
     
     
     test('should fire shown and hiden event', function () {
     var dropdownHTML = '<ul class="tabs">' +
     '<li class="dropdown">' +
     '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>' +
     '<ul class="dropdown-menu">' +
     '<li><a href="#">Secondary link</a></li>' +
     '<li><a href="#">Something else here</a></li>' +
     '<li class="divider"></li>' +
     '<li><a href="#">Another link</a></li>' +
     '</ul>' +
     '</li>' +
     '</ul>',
     dropdown = $(dropdownHTML)
     .appendTo('#qunit-fixture')
     .find('[data-toggle="dropdown"]')
     .dropdown()
     
     stop()
     
     dropdown
     .parent('.dropdown')
     .bind('shown.bs.dropdown', function () {
     ok(true, 'show was called')
     })
     .bind('hidden.bs.dropdown', function () {
     ok(true, 'hide was called')
     start()
     })
     
     dropdown.click()
     $(document.body).click()
     });
     */
});
