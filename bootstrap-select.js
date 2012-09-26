!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.selectClass = options.btnStyle || ''
        this.init();
    };

    Selectpicker.prototype = {

        contructor: Selectpicker,

        init: function (e) {
            this.$element.css('display', 'none');

            var template = this.getTemplate();
            template = this.createLi(template);
            this.$element.after(template);
            $('.bootstrap-select > a').addClass(this.selectClass);

            this.clickListener();
        },

        getTemplate: function() {
            var template =
                "<div class='btn-group bootstrap-select'>" +
                    "<a class='btn dropdown-toggle clearfix' data-toggle='dropdown' href='#''>" +
                        "<span class='filter-option pull-left'>__FIRST_OPTION</span>" +
                        "<span class='caret pull-right'></span>" +
                    "</a>" +
                    "<ul class='dropdown-menu'>" +
                        "__ADD_LI" +
                    "</ul>" +
                "</div>";

            return template;
        },

        createLi: function(template) {

            var _li = [];
            var _liHtml = '';
            var _this = this;

            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            if(_li.length > 0) {
                template = template.replace('__FIRST_OPTION', _li[0]);
                for (var i = 0; i < _li.length; i++) {
                    _liHtml += "<li rel=" + i + "><a href='#'>" + _li[i] + "</a></li>";
                };
            }

            _this.$element.find('option')[0].setAttribute('selected', 'selected');

            template = template.replace('__ADD_LI', _liHtml);

            return template;
        },

        clickListener: function() {
            _this = this;
            $('.bootstrap-select li').on('click', function() {
                var rel = $(this).attr('rel');

                _this.$element.find('option').removeAttr('selected');

                _this.$element.find('option')[parseInt(rel,10)]
                    .setAttribute('selected', 'selected');

                $('.filter-option').html($(this).text());
            });
        }

    };

    $.fn.selectpicker = function(option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('selectpicker'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

}(window.jQuery);
