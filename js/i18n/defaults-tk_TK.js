/*
 * Translated default messages for bootstrap-select.
 * Locale: TK (Turkmen)
 * Region: TK (Turkmenistan)
 * Author: Atageldi Didarov
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Hiç biri saýlanmady',
    noneResultsText: 'Gabat gelýän tapylmady {0}',
    countSelectedText: function (numSelected, numTotal) {
      return numSelected == 1 ? '{0} element saýlandy' : '{0} element saýlandy';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        numAll == 1
          ? 'Çäkden geçdi (maksimum {n} sany element)'
          : 'Çäkden geçdi (maksimum {n} sany element)',
        numGroup == 1
          ? 'Topar çäkleri geçdi (maksimum {n} sany element)'
          : 'Topar çäkleri geçdi (maksimum {n} sany element)'
      ];
    },
    selectAllText: 'Hemmesini saýla',
    deselectAllText: 'Hemmesini aýyr',
    multipleSeparator: ', '
  };
})(jQuery);
