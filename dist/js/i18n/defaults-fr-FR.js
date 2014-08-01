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
    selectedTextFormat: 'values',
    noneSelectedText: 'Aucune s&eacute;lection',
    noneResultsText: 'Aucun r&eacute;sultat',
    countSelectedText: '{0} sur {1} s&eacute;lection(s)',
    maxOptionsText: ['Limite atteinte ({n} {var} max)', 'Limite du groupe atteinte ({n} {var} max)', ['&eacute;l&eacute;ments', '&eacute;l&eacute;ment']],
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
