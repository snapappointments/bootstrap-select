 /*
  * Translated default messages for bootstrap-select.
  * Locale: EL (Greek)
  * Region: GR (Greece)
  */
 (function ($) {
   $.fn.selectpicker.defaults = {
     noneSelectedText: 'Δεν επιλέχθηκε τίποτα',
     noneResultsText: 'Δεν βρέθηκαν αποτελέσματα {0}',
     countSelectedText: function (numSelected, numTotal) {
       return (numSelected == 1) ? '{0} αντικείμενο επιλέχθηκε' : '{0} αντικείμενα επιλέχθηκαν';
     },
     maxOptionsText: function (numAll, numGroup) {
       return [
         (numAll == 1) ? 'Φθάστηκε το όριο ({n} αντικείμενο)' : 'Φθάστηκε το όριο ({n} αντικείμενα)',
         (numGroup == 1) ? 'Φθάστηκε το όριο ομάδας ({n} αντικείμενο)' : 'Φθάστηκε το όριο ομάδων ({n} αντικείμενα)'
       ];
     },
     selectAllText: 'Επιλογή όλων',
     deselectAllText: 'Αποεπιλογή όλων',
     multipleSeparator: ', '
   };
 })(jQuery);
