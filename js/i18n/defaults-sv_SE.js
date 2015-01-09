/*
 * Translated default messages for bootstrap-select.
 * Locale: SV (Swedish)
 * Region: SE (Sweden)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Inget valt',
    noneResultsText: 'Inget sökresultat matchar {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected === 1) ? "{0} alternativ valt" : "{0} alternativ valda";
    },
    maxOptionsText: function (numAll, numGroup) {
      var arr = [];

      arr[0] = 'Gräns uppnåd (max {n} alternativ)';
      arr[1] = 'Gräns uppnåd (max {n} gruppalternativ)';

      return arr;
    },
    selectAllText: 'Markera alla',
    deselectAllText: 'Avmarkera alla',
    multipleSeparator: ', '
  };
}(jQuery));
