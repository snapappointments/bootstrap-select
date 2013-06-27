!function($) {

    "use strict";

    var Selectpicker = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.button = null;

        //Merge defaults, options and data-attributes to make our options
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

        //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
        if(this.options.title==null)
            this.options.title = this.$element.attr('title');

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function (e) {
            if (!this.options.container) {
                this.$element.hide();
            } else {
                this.$element.css('visibility','hidden');
            };
            this.multiple = this.$element.prop('multiple');
            var id = this.$element.attr('id');
            this.$newElement = this.createView()
            this.$element.after(this.$newElement);

            if (this.options.container) {
                this.selectPosition();
            }
            this.button = this.$newElement.find('> button');
            if (id !== undefined) {
                var _this = this;
                this.button.attr('data-id', id);
                $('label[for="' + id + '"]').click(function(){
                    _this.button.focus();
                })
            }
            if (this.$element.attr('class')) {
                this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker/gi, ''));
            }

            //If we are multiple, then add the show-tick class by default
            if(this.multiple) {
                 this.$newElement.addClass('show-tick');
            }
            this.button.addClass(this.options.style);
            this.checkDisabled();
            this.checkTabIndex();
            this.clickListener();

            this.render();
            this.setSize();
        },

        createDropdown: function() {
            var drop =
                "<div class='btn-group bootstrap-select'>" +
                    "<button type='button' class='btn dropdown-toggle' data-toggle='dropdown'>" +
                        "<div class='filter-option pull-left'></div>&nbsp;" +
                        "<div class='caret'></div>" +
                    "</button>" +
                    "<ul class='dropdown-menu' role='menu'>" +
                    "</ul>" +
                "</div>";

            return $(drop);
        },


        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find('ul').append($li);
            return $drop;
        },

        reloadLi: function() {
            //Remove all children.
            this.destroyLi();
            //Re build
            var $li = this.createLi();
            this.$newElement.find('ul').append( $li );
        },

        destroyLi:function() {
            this.$newElement.find('li').remove();
        },

        createLi: function() {

            var _this = this;
            var _liA = [];
            var _liHtml = '';


            this.$element.find('option').each(function(index) {
                var $this = $(this);

                //Get the class and text for the option
                var optionClass = $this.attr("class") || '';
                var text =  $this.text();
                var subtext = $this.data('subtext') !== undefined ? '<small class="muted">' + $this.data('subtext') + '</small>' : '';
                var icon = $this.data('icon') !== undefined ? '<i class="'+$this.data('icon')+'"></i> ' : '';
                if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    icon = '<span>'+icon+'</span>';
                }

                //Prepend any icon and append any subtext to the main text.
                text = icon + '<span class="text">' + text + subtext + '</span>';

                if (_this.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    _liA.push('<a style="min-height: 0; padding: 0"></a>');
                } else if ($this.parent().is('optgroup') && $this.data('divider') != true) {
                    if ($this.index() == 0) {
                        //Get the opt group label
                        var label = $this.parent().attr('label');
                        var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted">'+$this.parent().data('subtext')+'</small>' : '';
                        var labelIcon = $this.parent().data('icon') ? '<i class="'+$this.parent().data('icon')+'"></i> ' : '';
                        label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

                        if ($this[0].index != 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+label+'</dt>'+
                                _this.createA(text, "opt " + optionClass )
                                );
                        } else {
                            _liA.push(
                                '<dt>'+label+'</dt>'+
                                _this.createA(text, "opt " + optionClass ));
                        }
                    } else {
                         _liA.push( _this.createA(text, "opt " + optionClass )  );
                    }
                } else if ($this.data('divider') == true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else if ($(this).data('hidden') == true) {
                    _liA.push('');
                } else {
                    _liA.push( _this.createA(text, optionClass ) );
                }
            });

            $.each(_liA, function(i, item){
                _liHtml += "<li rel=" + i + ">" + item + "</li>";
            });

            //If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if(!this.multiple && this.$element.find('option:selected').length==0 && !_this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return $(_liHtml);
        },

        createA:function(text, classes) {
         return '<a tabindex="0" class="'+classes+'">' +
                 text +
                 '<i class="icon-ok check-mark"></i>' +
                 '</a>';
        },

        render:function() {
            var _this = this;

            //Update the LI to match the SELECT
            this.$element.find('option').each(function(index) {
               _this.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
               _this.setSelected(index, $(this).is(':selected') );
            });

            var selectedItems = this.$element.find('option:selected').map(function(index,value) {
                var subtext;
                if (_this.options.showSubtext && $(this).attr('data-subtext') && !_this.multiple) {
                    subtext = ' <small class="muted">'+$(this).data('subtext') +'</small>';
                } else {
                    subtext = '';
                }
                if($(this).attr('title')!=undefined) {
                    return $(this).attr('title');
                } else {
                    return $(this).text() + subtext;
                }
            }).toArray();

            //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
            //Convert all the values into a comma delimited string
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(", "),
                separator = _this.options.separatorText || _this.options.defaultSeparatorText,
                selected = _this.options.selectedText || _this.options.defaultSelectedText;

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
            if(_this.multiple && _this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = _this.options.selectedTextFormat.split(">");
                var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
                if( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = _this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length);
                }
             }

            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if(!title) {
                title = _this.options.title != undefined ? _this.options.title : _this.options.noneSelectedText;
            }

            var subtext;
            if (this.options.showSubtext && this.$element.find('option:selected').attr('data-subtext')) {
                subtext = ' <small class="muted">'+this.$element.find('option:selected').data('subtext') +'</small>';
            } else {
                subtext = '';
            }

            var icon = this.$element.find('option:selected').data('icon') || '';
            if(icon.length) {
                icon = '<i class="' + icon + '"></i> ';
            }

            _this.$newElement.find('.filter-option').html(icon + title + subtext);
        },

        setSize:function() {
            if(this.options.container) {
                // Show $newElement before perfoming size calculations
                this.$newElement.toggle(this.$element.parent().is(':visible'));
            }
            var _this = this;
            var menu = this.$newElement.find('.dropdown-menu');
            var menuA = menu.find('li > a');
            var liHeight = this.$newElement.addClass('open').find('.dropdown-menu li > a').outerHeight();
            this.$newElement.removeClass('open');
            var divHeight = menu.find('li .divider').outerHeight(true);
            var selectOffset_top = this.$newElement.offset().top;
            var selectHeight = this.$newElement.outerHeight();
            var menuPadding = parseInt(menu.css('padding-top')) + parseInt(menu.css('padding-bottom')) + parseInt(menu.css('border-top-width')) + parseInt(menu.css('border-bottom-width'));
            var notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '';
            var menuHeight;
            if (this.options.size == 'auto') {
                var getSize = function() {
                    var selectOffset_top_scroll = selectOffset_top - $(window).scrollTop();
                    var windowHeight = window.innerHeight;
                    var menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2;
                    var selectOffset_bot = windowHeight - selectOffset_top_scroll - selectHeight - menuExtras;
                    var minHeight;
                    menuHeight = selectOffset_bot;
                    if (_this.$newElement.hasClass('dropup')) {
                        menuHeight = selectOffset_top_scroll - menuExtras;
                    }
                    if ((menu.find('li').length + menu.find('dt').length) > 3) {
                        minHeight = liHeight*3 + menuExtras - 2;
                    } else {
                        minHeight = 0;
                    }
                    menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'auto', 'min-height' : minHeight + 'px'});
            }
                getSize();
                $(window).resize(getSize);
                $(window).scroll(getSize);
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li'+notDisabled).length > this.options.size) {
                var optIndex = menu.find("li"+notDisabled+" > *").filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
                var divLength = menu.find("li").slice(0,optIndex + 1).find('.div-contain').length;
                menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
                menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'auto'});
            }

            //Set width of select
            if (this.options.width == 'auto') {
                this.$newElement.find('.dropdown-menu').css('min-width','0');
                var ulWidth = this.$newElement.find('.dropdown-menu').css('width');
                this.$newElement.css('width',ulWidth);
                if (this.options.container) {
                    this.$element.css('width',ulWidth);
                }
            } else if (this.options.width) {
                if (this.options.container) {
                    // Note: options.width can be %
                    this.$element.css('width', this.options.width);
                    // Set pixel width of $newElement based on $element's pixel width
                    this.$newElement.width(this.$element.outerWidth());
                } else {
                    this.$newElement.css('width',this.options.width);
                }
            } else if(this.options.container) {
                // Set width of $newElement based on $element
                this.$newElement.width(this.$element.outerWidth());
            }
        },

        selectPosition:function() {
            var containerOffset = $(this.options.container).offset();
            var eltOffset = this.$element.offset();
            if(containerOffset && eltOffset) {
                var selectElementTop = eltOffset.top - containerOffset.top;
                var selectElementLeft = eltOffset.left - containerOffset.left;
                this.$newElement.appendTo(this.options.container);
                this.$newElement.css({'position':'absolute', 'top':selectElementTop+'px', 'left':selectElementLeft+'px'});
            }
        },

        refresh:function() {
            this.reloadLi();
            this.render();
            this.setSize();
            this.checkDisabled();
            if (this.options.container) {
                this.selectPosition();
            }
        },

        setSelected:function(index, selected) {
            if(selected) {
                this.$newElement.find('li').eq(index).addClass('selected');
            } else {
                this.$newElement.find('li').eq(index).removeClass('selected');
            }
        },

        setDisabled:function(index, disabled) {
            if(disabled) {
                this.$newElement.find('li').eq(index).addClass('disabled').find('a').attr('href','#').attr('tabindex',-1);
            } else {
                this.$newElement.find('li').eq(index).removeClass('disabled').find('a').removeAttr('href').attr('tabindex',0);
            }
        },

        isDisabled: function() {
            return this.$element.is(':disabled') || this.$element.attr('readonly');
        },

        checkDisabled: function() {
            if (this.isDisabled()) {
                this.button.addClass('disabled');
                this.button.click(function(e) {
                    e.preventDefault();
                });
                this.button.attr('tabindex','-1');
            } else if (!this.isDisabled() && this.button.hasClass('disabled')) {
                this.button.removeClass('disabled');
                this.button.click(function() {
                    return true;
                });
                this.button.removeAttr('tabindex');
            }
        },

        checkTabIndex: function() {
            if (this.$element.is('[tabindex]')) {
                var tabindex = this.$element.attr("tabindex");
                this.button.attr('tabindex', tabindex);
            }
        },

        clickListener: function() {
            var _this = this;

            $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

            this.$newElement.on('click', 'li a', function(e){
                var clickedIndex = $(this).parent().index(),
                    $this = $(this).parent(),
                    $select = $this.parents('.bootstrap-select'),
                    prevValue = _this.$element.val();

                //Dont close on multi choice menu
                if(_this.multiple) {
                    e.stopPropagation();
                }

                e.preventDefault();

                //Dont run if we have been disabled
                if (_this.$element.not(':disabled') && !$(this).parent().hasClass('disabled')){
                    //Deselect all others if not multi select box
                    if (!_this.multiple) {
                        _this.$element.find('option').prop('selected', false);
                        _this.$element.find('option').eq(clickedIndex).prop('selected', true);
                    }
                    //Else toggle the one we have chosen if we are multi select.
                    else {
                        var selected = _this.$element.find('option').eq(clickedIndex).prop('selected');

                        if(selected) {
                            _this.$element.find('option').eq(clickedIndex).prop('selected', false);
                        } else {
                            _this.$element.find('option').eq(clickedIndex).prop('selected', true);
                        }
                    }

                    $select.find('button').focus();

                    // Trigger select 'change'
                    if (prevValue != _this.$element.val()) {
                        _this.$element.trigger('change');
                    }

                    _this.render();
                }

            });

           this.$newElement.on('click', 'li.disabled a, li dt, li .div-contain', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var $select = $(this).parent().parents('.bootstrap-select');
                $select.find('button').focus();
            });

            this.$element.on('change', function(e) {
                _this.render();
            });
        },

        val:function(value) {

            if(value!=undefined) {
                this.$element.val( value );

                this.$element.trigger('change');
                return this.$element;
            } else {
                return this.$element.val();
            }
        },

        selectAll:function() {
            this.$element.find('option').prop('selected', true).attr('selected', 'selected');
            this.render();
        },

        deselectAll:function() {
            this.$element.find('option').prop('selected', false).removeAttr('selected');
            this.render();
        },

        keydown: function (e) {
            var $this,
                $items,
                $parent,
                index,
                next,
                first,
                last,
                prev,
                nextPrev

            $this = $(this);

            $parent = $this.parent();

            $items = $('[role=menu] li:not(.divider):visible a', $parent);

            if (!$items.length) return;

            if (/(38|40)/.test(e.keyCode)) {

                index = $items.index($items.filter(':focus'));

                first = $items.parent(':not(.disabled)').first().index();
                last = $items.parent(':not(.disabled)').last().index();
                next = $items.eq(index).parent().nextAll(':not(.disabled)').eq(0).index();
                prev = $items.eq(index).parent().prevAll(':not(.disabled)').eq(0).index();
                nextPrev = $items.eq(next).parent().prevAll(':not(.disabled)').eq(0).index();

                if (e.keyCode == 38) {
                    if (index != nextPrev && index > prev) index = prev;
                    if (index < first) index = first;
                }

                if (e.keyCode == 40) {
                    if (index != nextPrev && index < next) index = next;
                    if (index > last) index = last;
                }

                $items.eq(index).focus()
            } else {
                var keyCodeMap = {
                    48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
                    65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
                    77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
                    96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9"
                }

                var keyIndex = [];

                $items.each(function() {
                    if ($(this).parent().is(':not(.disabled)')) {
                        if ($.trim($(this).text().toLowerCase()).substring(0,1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push($(this).parent().index());
                        }
                    }
                });

                var count = $(document).data('keycount');
                count++;
                $(document).data('keycount',count);

                var prevKey = $.trim($(':focus').text().toLowerCase()).substring(0,1);

                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data('keycount',count);
                } else if (count >= keyIndex.length) {
                    $(document).data('keycount',0);
                }

                $items.eq(keyIndex[count - 1]).focus();
            }

            if (/(13)/.test(e.keyCode)) {
                $(':focus').click();
                $parent.addClass('open');
                $(document).data('keycount',0);
            }
        },

        hide: function() {
            this.$newElement.hide();
        },

        show: function() {
            this.$newElement.show();
        }
    };

    $.fn.selectpicker = function(option, event) {
       //get the args of the outer function..
       var args = arguments;
       var value;
       var chain = this.each(function () {
            if ($(this).is('select')) {
                var $this = $(this),
                    data = $this.data('selectpicker'),
                    options = typeof option == 'object' && option;

                if (!data) {
                    $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
                } else if(options){
                    for(var i in options) {
                       data.options[i]=options[i];
                    }
                }

                if (typeof option == 'string') {
                    //Copy the value of option, as once we shift the arguments
                    //it also shifts the value of option.
                    var property = option;
                    if(data[property] instanceof Function) {
                        [].shift.apply(args);
                        value = data[property].apply(data, args);
                    } else {
                        value = data.options[property];
                    }
                }
            }
        });

        if(value!=undefined) {
            return value;
        } else {
            return chain;
        }
    };

    $.fn.selectpicker.defaults = {
        style: null,
        size: 'auto',
        title: null,
        selectedTextFormat : 'values',
        noneSelectedText : 'Nothing selected',
        countSelectedText: '{0} of {1} selected',
        width: null,
        container: false,
        hideDisabled: false,
        showSubtext: false
    }

    $(document)
        .data('keycount', 0)
        .on('keydown', '[data-toggle=dropdown], [role=menu]' , Selectpicker.prototype.keydown)

}(window.jQuery);
