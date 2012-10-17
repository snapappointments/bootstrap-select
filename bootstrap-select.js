!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
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
            this.$newElement = this.$element.next('.bootstrap-select');
            this.$newElement.find('> a').addClass(this.selectClass);
            this.clickListener();
        },

        getTemplate: function() {
            var template =
                "<div class='btn-group bootstrap-select'>" +
                    "<a class='btn dropdown-toggle clearfix' data-toggle='dropdown' href='#''>" +
                        "<span class='filter-option pull-left'>__SELECTED_OPTION</span>" +
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
            var _selected_index = this.$element.find('option:selected').index() ? this.$element.find('option:selected').index() : 0;

            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            if(_li.length > 0) {
                template = template.replace('__SELECTED_OPTION', _li[_selected_index]);
                for (var i = 0; i < _li.length; i++) {
                    _liHtml += "<li rel=" + i + "><a href='#'>" + _li[i] + "</a></li>";
                };
            }

            this.$element.find('option')[_selected_index].setAttribute('selected', 'selected');

            template = template.replace('__ADD_LI', _liHtml);

            return template;
        },

        clickListener: function() {
            _this = this;
            this.$newElement.find('li').on('click', function(e) {
                e.preventDefault();

                var rel = $(this).attr('rel');

                $(this).parents('.bootstrap-select').prev('select')
                    .find('option').removeAttr('selected');

                $(this).parents('.bootstrap-select').prev('select')
                    .find('option')[parseInt(rel,10)]
                    .setAttribute('selected', 'selected');

                $(this).parents('.bootstrap-select')
                    .find('.filter-option').html($(this).text());

				// Trigger select 'change'
                $(this).parents('.bootstrap-select').prev('select')
					.trigger('change');
            });
        }

    };

    $.fn.selectpicker = function(option, event) {
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
