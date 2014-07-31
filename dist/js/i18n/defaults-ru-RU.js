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
    noneSelectedText: 'Ничего не выбрано',
    noneResultsText: 'Не найдено совпадений',
    countSelectedText: 'Выбрано {0} из {1}',
    maxOptionsText: ['Достигнут предел ({n} {var} максимум)', 'Достигнут предел в группе ({n} {var} максимум)', ['items', 'item']],
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    actionsBox: false,
    multipleSeparator: ', ',
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok',
    maxOptions: false
  };
}(jQuery));
