/*
 * Translated default messages for bootstrap-select.
 * Locale: HE (Hebrew)
 * Region: IL (Israel)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'בחר פריט מהרשימה',
    noneResultsText: 'אין תוצאות לחיפוש {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} פריט נבחר' : '{0} פריטים נבחרו';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'חרגת מהמגבלה ({n} פריט לכל היותר)' : 'חרגת מהמגבלה ({n} פריטים לכל היותר)',
        (numGroup == 1) ? 'חרגת ממגבלת הקבוצה (מקסימום {n} פריט)' : 'חרגת ממגבלת הקבוצה (מקסימום {n} פריטים)'
      ];
    },
    selectAllText: 'בחר הכל',
    deselectAllText: 'בטל בחירת הכל',
    multipleSeparator: ', '
  };
})(jQuery);
