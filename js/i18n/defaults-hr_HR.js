/*
 * Translated default messages for bootstrap-select.
 * Locale: HR (Croatia)
 * Region: HR (Croatia)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Odaberite stavku',
    noneResultsText: 'Nema rezultata pretrage {0}',
    countSelectedText: function (numSelected, numTotal) {
		if (numSelected % 10 == 1 && numSelected != 11) { return '{0} stavka označena'}
		else if ( (numSelected < 11 || numSelected > 14)  && (numSelected % 10 == 2 ||numSelected % 10 == 3 || numSelected % 10 == 4) ) 
		{
			return '{0} stavke označene'
		}
		else {
			return '{0} stavki označeno'
		};
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
		(numAll % 10 == 1 && numAll != 11) ? 'Ograničenje je postignuto ({n} stavka maksimalno)' :
		( (numAll < 11 || numAll > 14)  && (numAll % 10 == 2 ||numAll % 10 == 3 || numAll % 10 == 4) ) ? 'Ograničenje je postignuto ({n} stavke maksimalno)'
			:'Ograničenje je postignuto ({n} stavki maksimalno)',
		(numAll % 10 == 1 && numAll != 11) ? 'Grupno ograničenje je postignut ({n} stavka maksimalno)' :
		( (numGroup < 11 || numGroup > 14)  && (numGroup % 10 == 2 ||numGroup % 10 == 3 || numGroup % 10 == 4) ) ? 'Grupno ograničenje je postignuto ({n} stavke maksimalno)'
			:'Grupno ograničenje je postignut ({n} stavki maksimalno)'
      ];
    },
    selectAllText: 'Označi sve',
    deselectAllText: 'Makni oznake',
    multipleSeparator: ', '
  };
})(jQuery);
