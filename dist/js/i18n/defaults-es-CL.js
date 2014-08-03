/*!
 * Bootstrap-select v1.5.4 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    noneSelectedText: 'No hay selección',
    noneResultsText: 'No hay resultados',
    countSelectedText: 'Seleccionados {0} de {1}',
    maxOptionsText: ['Límite alcanzado ({n} {var} max)', 'Límite del grupo alcanzado({n} {var} max)', ['elementos', 'element']],
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
