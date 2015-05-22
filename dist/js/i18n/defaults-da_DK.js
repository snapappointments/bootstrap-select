/*!
 * Bootstrap-select v1.7.1 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Intet valgt',
    noneResultsText: 'Ingen resultater fundet {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} valgt" : "{0} valgt";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Begrænsning nået (max {n} valgt)' : 'Begrænsning nået (max {n} valgte)',
        (numGroup == 1) ? 'Gruppe-begrænsning nået (max {n} valgt)' : 'Gruppe-begrænsning nået (max {n} valgte)'
      ];
    },
    selectAllText: 'Markér alle',
    deselectAllText: 'Afmarkér alle',
    multipleSeparator: ', '
  };
})(jQuery);
