/*
 * Translated default messages for bootstrap-select.
 * Locale: HR (Croatia)
 * Region: HR (Croatia)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Odaberite stavku',
    noneResultsText: 'Nema rezultata za {0}',
    countSelectedText:  'Selektirano stavaka: {0}',
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Limit postignut (maksimalno {n})',
        'Grupni limit postignut (maksimalno {n})'
      ];
    },
    selectAllText: 'Selektiraj sve',
    deselectAllText: 'Deselektiraj sve',
    multipleSeparator: ', '
  };
})(jQuery);
