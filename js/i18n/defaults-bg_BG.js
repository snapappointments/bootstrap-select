/*
 * Translated default messages for bootstrap-select.
 * Locale: BG (Bulgaria)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Няма избрани',
    noneResultsText: 'Няма намерени резултати {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} е избран" : "{0} са избрани";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Лимита е достигнат ( максимален брой : {n} )',
        'Лимита на групата е достигнат (максимален брой : {n})'
      ];
    },
    selectAllText: 'Избери всички',
    deselectAllText: 'Премахни всички',
    multipleSeparator: ', '
  };
})(jQuery);
