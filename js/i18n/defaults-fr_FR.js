/*
* Translated default messages for bootstrap-select.
* Locale: FR (French; Français)
* Region: FR (France)
*/
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Aucune s&eacute;lection',
    noneResultsText: 'Aucun r&eacute;sultat',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected > 1) ? "{0} &eacute;l&eacute;ments s&eacute;lection&eacute;s" : "{0} &eacute;l&eacute;ment s&eacute;lection&eacute;";
    },
    maxOptionsText: function (numAll, numGroup) {
      var arr = [];

      arr[0] = (numAll > 1) ? 'Limite atteinte ({n} &eacute;l&eacute;ments max)' : 'Limite atteinte ({n} &eacute;l&eacute;ment max)';
      arr[1] = (numGroup > 1) ? 'Limite du groupe atteinte ({n} &eacute;l&eacute;ments max)' : 'Limite du groupe atteinte ({n} &eacute;l&eacute;ment max)';

      return arr;
    },
    multipleSeparator: ', '
  };
}(jQuery));
