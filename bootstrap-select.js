!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.button = null;
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);
        this.style = this.options.style;
        this.size = this.options.size;
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
            var select = this.$newElement;
            var menu = this.$newElement.find('.dropdown-menu');
            var menuA = menu.find('li > a');
            var liHeight = parseInt(menuA.css('line-height')) + menuA.outerHeight();
            var divHeight = menu.find('li .divider').outerHeight(true);
            var selectOffset_top = this.$newElement.offset().top;
            var size = 0;
            var menuHeight = 0;
            var selectHeight = this.$newElement.outerHeight();
            this.button = this.$newElement.find('> button');
            if (id !== undefined) {
                this.button.attr('id', id);
                $('label[for="' + id + '"]').click(function(){ select.find('button#'+id).focus(); })
            }
            for (var i = 0; i < classList.length; i++) {
                if(classList[i] != 'selectpicker') {
                    this.$newElement.addClass(classList[i]);
                }
            }
            this.button.addClass(this.style);
            this.checkDisabled();
			this.checkTabIndex();
            this.clickListener();
            var menuPadding = parseInt(menu.css('padding-top')) + parseInt(menu.css('padding-bottom')) + parseInt(menu.css('border-top-width')) + parseInt(menu.css('border-bottom-width'));
            if (this.size == 'auto') {
                function getSize() {
                    var selectOffset_top_scroll = selectOffset_top - $(window).scrollTop();
                    var windowHeight = window.innerHeight;
                    var menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2;
                    var selectOffset_bot = windowHeight - selectOffset_top_scroll - selectHeight - menuExtras;
                    menuHeight = selectOffset_bot;
                    if (select.hasClass('dropup')) {
                        menuHeight = selectOffset_top_scroll - menuExtras;
                    }
                    menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'auto', 'min-height' : liHeight*3 + 'px'});
            }
                getSize();
                $(window).resize(getSize);
                $(window).scroll(getSize);
                this.$element.bind('DOMNodeInserted', getSize);
            } else if (this.size && this.size != 'auto' && menu.find('li').length > this.size) {
                var optIndex = menu.find("li > *").filter(':not(.div-contain)').slice(0,this.size).last().parent().index();
                var divLength = menu.find("li").slice(0,optIndex + 1).find('.div-contain').length;
                menuHeight = liHeight*this.size + divLength*divHeight + menuPadding;
                menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'scroll'});
            }

            this.$element.bind('DOMNodeInserted', $.proxy(this.reloadLi, this));
        },

        getTemplate: function() {
            var template =
                "<div class='btn-group bootstrap-select'>" +
                    "<button class='btn dropdown-toggle clearfix' data-toggle='dropdown'>" +
                        "<span class='filter-option pull-left'>__SELECTED_OPTION</span>&nbsp;" +
                        "<span class='caret'></span>" +
                    "</button>" +
                    "<ul class='dropdown-menu' role='menu'>" +
                        "__ADD_LI" +
                    "</ul>" +
                "</div>";

            return template;
        },

        reloadLi: function() {
            var _li = [];
            var _liA = [];
            var _liHtml = '';

            this.$newElement.find('li').remove();

            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            this.$element.find('option').each(function() {
                var optionClass = $(this).attr("class") !== undefined ? $(this).attr("class") : '';
                var subtext = $(this).data('subtext') !== undefined ? '<small class="muted">'+$(this).data('subtext')+'</small>' : '';
                var labelSubtext = $(this).parent().data('subtext') !== undefined ? '<small class="muted">'+$(this).parent().data('subtext')+'</small>' : '';
                if ($(this).parent().is('optgroup') && $(this).data('divider') != true) {
                    if ($(this).index() == 0) {
                        if ($(this)[0].index != 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+$(this).parent().attr('label')+labelSubtext+'</dt>'+
                                '<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>'
                                );
                        } else {
                            _liA.push(
                                '<dt>'+$(this).parent().attr('label')+labelSubtext+'</dt>'+
                                '<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>'
                                );
                        }
                    } else {
                         _liA.push('<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>');
                    }
                } else if ($(this).data('divider') == true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else {
                    _liA.push('<a tabindex="-1" href="#" class="'+optionClass+'">'+$(this).text()+subtext+'</a>');
                }
            });

            if(_li.length > 0) {
                for (var i = 0; i < _li.length; i++) {
                    var disabled = this.$element.find('option').eq(i).is(':disabled') || this.$element.find('option').eq(i).parent().is(':disabled') ? 'class="disabled"' : '';
                    this.$newElement.find('ul').append(
                        '<li rel=' + i + ' '+ disabled +'>' + _liA[i] + '</li>'
                    );
                }
            }

            this.$newElement.find('li.disabled a, li dt, li .div-contain').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $select = $(this).parent().parents('.bootstrap-select');
                $select.find('button').focus();
            });

            if(this.$element.find('option:selected').attr('title')!=undefined){
                this.$newElement.find('.filter-option').html(this.$element.find('option:selected').attr('title'));
            }else{
                this.$newElement.find('.filter-option').html(this.$element.find('option:selected').text());
            }
        },

        createLi: function(template) {

            var _li = [];
            var _liA = [];
            var _liHtml = '';
            var _this = this;
            var _selected_index = this.$element[0].selectedIndex ? this.$element[0].selectedIndex : 0;

            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            this.$element.find('option').each(function() {
                var optionClass = $(this).attr("class") !== undefined ? $(this).attr("class") : '';
                var subtext = $(this).data('subtext') !== undefined ? '<small class="muted">'+$(this).data('subtext')+'</small>' : '';
                var labelSubtext = $(this).parent().data('subtext') !== undefined ? '<small class="muted">'+$(this).parent().data('subtext')+'</small>' : '';
                if ($(this).parent().is('optgroup') && $(this).data('divider') != true) {
                    if ($(this).index() == 0) {
                        if ($(this)[0].index != 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+$(this).parent().attr('label')+labelSubtext+'</dt>'+
                                '<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>'
                                );
                        } else {
                            _liA.push(
                                '<dt>'+$(this).parent().attr('label')+labelSubtext+'</dt>'+
                                '<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>'
                                );
                        }
                    } else {
                         _liA.push('<a tabindex="-1" href="#" class="opt '+optionClass+'">'+$(this).text()+subtext+'</a>');
                    }
                } else if ($(this).data('divider') == true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else {
                    _liA.push('<a tabindex="-1" href="#" class="'+optionClass+'">'+$(this).text()+subtext+'</a>');
                }
            });

            if (_li.length > 0) {
                template = template.replace('__SELECTED_OPTION', _li[_selected_index]);
                for (var i = 0; i < _li.length; i++) {
                    var disabled = this.$element.find('option').eq(i).is(':disabled') || this.$element.find('option').eq(i).parent().is(':disabled') ? 'class="disabled"' : '';
                    _liHtml += "<li rel=" + i + " "+ disabled +">" + _liA[i] + "</li>";
                }
            } else {
                template = template.replace('__SELECTED_OPTION', '');
            }

            this.$element.find('option').eq(_selected_index).prop('selected',true);

            template = template.replace('__ADD_LI', _liHtml);

            return template;
        },

        checkDisabled: function() {
            if (this.$element.is(':disabled')) {
                this.button.addClass('disabled');
                this.button.click(function(e) {
                    e.preventDefault();
                });
            }
        },
		
		checkTabIndex: function() {
			if (this.$element.is('[tabindex]')) {
				var tabindex = this.$element.attr("tabindex");
				this.button.attr('tabindex', tabindex);
			}
		},

        clickListener: function() {
            $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
            this.$newElement.find('li.disabled a, li dt, li .div-contain').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $select = $(this).parent().parents('.bootstrap-select');
                $select.find('button').focus();
            });
            this.$newElement.on('click', 'li a', function(e){
                e.preventDefault();
                var selected = $(this).parent().index(),
                    $this = $(this).parent(),
                    $select = $this.parents('.bootstrap-select');

                if ($select.prev('select').not(':disabled')){

                    $select.prev('select').find('option').removeAttr('selected');

                    $select.prev('select').find('option').eq(selected).prop('selected', true).attr('selected', 'selected');
                    $select.find('.filter-option').html($this.text());
                    $select.find('button').focus();

                    // Trigger select 'change'
                    $select.prev('select').trigger('change');
                }

            });
            this.$element.on('change', function(e) {
                if($(this).find('option:selected').attr('title')!=undefined){
                    $(this).next('.bootstrap-select').find('.filter-option').html($(this).find('option:selected').attr('title'));
                }else{
                    $(this).next('.bootstrap-select').find('.filter-option').html($(this).find('option:selected').text());
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

    $.fn.selectpicker.defaults = {
        style: null,
        size: 'auto'
    }

}(window.jQuery);