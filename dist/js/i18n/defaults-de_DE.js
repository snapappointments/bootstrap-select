/*!
 * Bootstrap-select v1.5.4 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/README.md#copyright-and-license)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'ausgewählt',
    noneSelectedText: 'Bitte wählen...',
    noneResultsText: 'Keine Ergebnisse für',
    countSelectedText: '{0} von {1} ausgewählt',
    maxOptionsText: ['Limit erreicht ({n} {var} max.)', 'Gruppen-Limit erreicht ({n} {var} max.)', ['Eintrag', 'Einträge']],
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
