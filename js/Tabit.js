/*jQuery plugin that simulates clicking Tabit
 * Authoer : Samer Abu Rabie =>samerx@outlook.com
 * v 1.0.0
 */
function Tabit() {
    var focusable = ":input, a[href]";
    var $from = $(document.activeElement);
    var offset = +1;

    var $focusable = $(focusable)
                    .not(":disabled")
                    .not(":hidden")
                    .not("a[href]:empty");

    if ($from[0].tagName === "INPUT" && $from[0].type === "radio" && $from[0].name !== "") {
        var name = $from[0].name.replace(/(!"#$%&'\(\)\*\+,\.\/:;<=>\?@\[\]^`\{\|\}~)/g, "\\\\$1");

        $focusable = $focusable
            .not("input[type=radio][name=" + name + "]")
            .add($from);
    }

    var currentIndex = $focusable.index($from);
    var nextIndex = (currentIndex + offset) % $focusable.length;

    if (nextIndex <= -1) {
        nextIndex = $focusable.length + nextIndex;
    }

    var $next = $focusable.eq(nextIndex);
    $next.focus();
}

; (function ($) {
    $.Tabit = function () {
        Tabit();
    }
})(jQuery);
