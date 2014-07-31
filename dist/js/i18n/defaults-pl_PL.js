/*!
 * Bootstrap-select dev (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/README.md#copyright-and-license)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    noneSelectedText: 'Nic nie zaznaczono',
    noneResultsText: 'Brak wyników wyszukiwania',
    countSelectedText: 'Zaznaczono {0} z {1}',
    maxOptionsText: ['Osiągnięto limit ({n} {var} max)', 'Limit grupy osiągnięty ({n} {var} max)', ['elementy', 'element']],
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    multipleSeparator: ', ',
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok'
  };
}(jQuery));
