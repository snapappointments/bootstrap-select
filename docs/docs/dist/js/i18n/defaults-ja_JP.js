/*!
<<<<<<< HEAD
 * Bootstrap-select v1.13.3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
=======
 * Bootstrap-select v1.12.4 (https://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2018 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
>>>>>>> ec243882c07ea16bef828a908c753366636dd634
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '未選択',
    noneResultsText: '\'{0}\'が結果を返さない',
    countSelectedText: '{0}/{1}を選択した',
    maxOptionsText: ['上限に達した(最大{n}{var})', 'グループ上限に達した(最大{n}{var})', ['項目', '項目']],
    selectAllText: '全て選択する',
    deselectAllText: '何も選択しない',
    multipleSeparator: ', '
  };
})(jQuery);


}));
