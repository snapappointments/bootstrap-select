/*
 * Translated default messages for bootstrap-select.
 * Locale: SR (Serbian; Srpski)
 * Region: SR (Republic of Serbia)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Izaberite',
    noneResultsText: 'Nema rezultata za {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} izabrana' : '{0} izabrane';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit je dostignut ({n} stvar maximalno)' : 'Limit je dostignut ({n} stavke maksimalno)',
        (numGroup == 1) ? 'Grupni limit je dostignut ({n} stvar maksimalno)' : 'Grupni limit je dostignut ({n} stavke maksimalno)'
      ];
    },
    selectAllText: 'Izaberi sve',
    deselectAllText: 'Obrisi sve',
    multipleSeparator: ', '
  };
})(jQuery);
