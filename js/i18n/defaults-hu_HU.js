/*
* Translated default messages for bootstrap-select.
* Locale: HU (Hungarian)
* Region: HU (Hungary)
*/
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Válasszon!',
    noneResultsText: 'Nincs találat',
    countSelectedText: function (numSelected, numTotal) {
      return '{n} elem kiválasztva';
    },
    maxOptionsText: function (numAll, numGroup) {
      var arr = [];
      arr[0] = 'Legfeljebb {n} elem választható';
      arr[1] = 'A csoportban legfeljebb {n} elem választható';
      return arr;
    },
    selectAllText: 'Mind',
    deselectAllText: 'Egyik sem',
    multipleSeparator: ', '
  };
}(jQuery));
