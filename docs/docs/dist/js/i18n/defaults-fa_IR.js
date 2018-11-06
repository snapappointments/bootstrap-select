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
        noneSelectedText: 'چیزی انتخاب نشده است',
        noneResultsText: 'هیج مشابهی برای {0} پیدا نشد',
        countSelectedText: "{0} از {1} مورد انتخاب شده",
        maxOptionsText: ['بیشتر ممکن نیست {حداکثر {n} عدد}', 'بیشتر ممکن نیست {حداکثر {n} عدد}'],
        selectAllText: 'انتخاب همه',
        deselectAllText: 'انتخاب هیچ کدام',
        multipleSeparator: ', '
    };
})(jQuery);


}));
