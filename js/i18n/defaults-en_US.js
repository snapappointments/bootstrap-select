/*
 * Translated default messages for bootstrap-select.
 * Locale: EN (English)
 * Region: US (United States)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results match',
    countSelectedText: '{0} of {1} selected',
    maxOptionsText: function (numAll, numGroup) {
      var arr = [];

      arr[0] = (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)';
      arr[1] = (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)';

      return arr;
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    multipleSeparator: ', '
  };
}(jQuery));
