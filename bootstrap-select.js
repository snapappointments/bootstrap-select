!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.selectClass = options.btnStyle || '';
        this.direction = options.direction || '';
        this.init();
    };

    Selectpicker.prototype = {

        contructor: Selectpicker,

        init: function (e) {
            this.$element.css('display', 'none');
            var classList = this.$element.attr('class').split(/\s+/);
            var template = this.getTemplate();
            template = this.createLi(template);
            this.$element.after(template);
            this.$newElement = this.$element.next('.bootstrap-select');
            this.$newElement.addClass(this.direction);
            for (var i = 0; i < classList.length; i++) {
                if(classList[i] != 'selectpicker') {
                    this.$newElement.find('> a').addClass(classList[i]);
                }
            };
            this.$newElement.find('> a').addClass(this.selectClass);
            this.checkDisabled();
            this.clickListener();
        },

        getTemplate: function() {
            var template =
                "<div class='btn-group bootstrap-select'>" +
                    "<a class='btn dropdown-toggle clearfix' data-toggle='dropdown' href='#''>" +
                        "<span class='filter-option pull-left'>__SELECTED_OPTION</span>" +
                        "<span class='caret pull-right'></span>" +
                    "</a>" +
                    "<ul class='dropdown-menu' role='menu'>" +
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
                    _liHtml += "<li rel=" + i + "><a tabindex='-1' href='#'>" + _li[i] + "</a></li>";
                }
            }


            this.$element.find('option')[_selected_index].setAttribute('selected', 'selected');

            template = template.replace('__ADD_LI', _liHtml);

            return template;
        },

        checkDisabled: function() {
            if (this.$element.is(':disabled')) {
                this.$newElement.addClass('disabled');
            }
        },

        clickListener: function() {
            _this = this;
            this.$newElement.find('li').on('click', function(e) {
                e.preventDefault();

                var $this = $(this),
                    rel = $this.attr('rel'),
                    $select = $this.parents('.bootstrap-select');

                if (!_this.$element.is(':disabled')){
                    $select.prev('select').find('option').removeAttr('selected');

                    $select.prev('select').find('option')[parseInt(rel,10)]
                        .setAttribute('selected', 'selected');

                    $select.find('.filter-option').html($this.text());

                    // Trigger select 'change'
                    $select.prev('select').trigger('change');
                }

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
