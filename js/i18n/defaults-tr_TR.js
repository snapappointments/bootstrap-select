/*
* Translated default messages for bootstrap-select.
* Locale: TR (Turkey)
* Region: TR (Europe)
*/
(function ($) {
$.fn.selectpicker.defaults = {
noneSelectedText: 'Hiçbiri seçilmedi',
noneResultsText: 'Hiçbir sonuç bulunamadı',
countSelectedText: function (numSelected, numTotal) {
return (numSelected == 1) ? "{0} öğe seçildi" : "{0} öğe seçildi";
},
maxOptionsText: function (numAll, numGroup) {
var arr = [];
arr[0] = (numAll == 1) ? 'Limit aşıldı (maksimum {n} sayıda öğe )' : 'Limit aşıldı (maksimum {n} sayıda öğe)';
arr[1] = (numGroup == 1) ? 'Grup limiti aşıldı (maksimum {n} sayıda öğe)' : 'Grup limiti aşıldı (maksimum {n} sayıda öğe)';
return arr;
},
selectAllText: 'Hepsini seç',
deselectAllText: 'Hiçbirini seçme',
multipleSeparator: ', '
};
}(jQuery));
