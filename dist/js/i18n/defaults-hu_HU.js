/*!
 * Bootstrap-select v1.6.3 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Válasszon!',
    noneResultsText: 'Nincs találat {0}',
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
