!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.options = $.extend({}, $.fn.selectpicker.defaults, options);
        this.style = this.options.style || this.$element.attr('data-style');
        this.size = this.options.size || this.$element.attr('data-size');
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function (e) {
            this.$element.hide();
            var classList = this.$element.attr('class') !== undefined ? this.$element.attr('class').split(/\s+/) : '';
            var template = this.getTemplate();
            var id = this.$element.attr('id');
            template = this.createLi(template);
            this.$element.after(template);
            this.$newElement = this.$element.next('.bootstrap-select');
            var button = this.$newElement.find('> button');
            if (id !== undefined) {
                button.attr('id', id);
            }
            for (var i = 0; i < classList.length; i++) {
                if(classList[i] != 'selectpicker') {
                    this.$newElement.addClass(classList[i]);
                }
            }
            var maxWidth = button.outerWidth() - 38;
            this.$newElement.find('> button > .filter-option').css('max-width',maxWidth + 'px');
            button.addClass(this.style);
            if (this.size && this.$newElement.find('.dropdown-menu ul li').length > this.size) {
                var menuA = this.$newElement.find('.dropdown-menu ul li > a');
                var height = (parseInt(menuA.css('line-height')) + menuA.outerHeight())*this.size;
                this.$newElement.find('.dropdown-menu ul').css({'max-height' : height + 'px', 'overflow-y' : 'scroll'});
            }
            this.checkDisabled();
            this.clickListener();

            this.$newElement.find('ul').bind('DOMNodeInserted',
                $.proxy(this.clickListener, this));
        },

        getTemplate: function() {
            var template =
                "<div class='btn-group bootstrap-select'>" +
                    "<button class='btn dropdown-toggle clearfix' data-toggle='dropdown'>" +
                        "<span class='filter-option pull-left'>__SELECTED_OPTION</span> " +
                        "<span class='caret pull-right'></span>" +
                    "</button>" +
                    "<div class='dropdown-menu' role='menu'>" +
                        "<ul>" +
                            "__ADD_LI" +
                        "</ul>" +
                    "</div>" +
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

            this.$element.find('option').eq(_selected_index).prop('selected',true);

            template = template.replace('__ADD_LI', _liHtml);

            return template;
        },

        checkDisabled: function() {
            if (this.$element.is(':disabled')) {
                var button = this.$newElement.find('> button');
                button.addClass('disabled');
                button.click(function(e) {
                    e.preventDefault();
                });
            }
        },

        clickListener: function() {
            var _this = this;
            $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
            this.$newElement.find('li').on('click', function(e) {
                e.preventDefault();
                var selected = $(this).index();
                var $this = $(this),
                    rel = $this.attr('rel'),
                    $select = $this.parents('.bootstrap-select');

                if (_this.$element.not(':disabled')){
                    $select.prev('select').find('option').eq(selected).prop('selected',true);
                    $select.find('.filter-option').html($this.text());

                    // Trigger select 'change'
                    $select.prev('select').trigger('change');
                }
            });
            this.$element.on('change', function(e) {
                var selected = $(this).find('option:selected').text();
                $(this).next('.bootstrap-select').find('.filter-option').html(selected);

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

    $.fn.selectpicker.defaults = {
        style: null,
        size: null
    }

}(window.jQuery);
