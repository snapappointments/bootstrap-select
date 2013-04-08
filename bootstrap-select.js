!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
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
            var classList = this.$element.attr('class') !== undefined ? this.$element.attr('class').split(/\s+/) : '';
            var id = this.$element.attr('id');
            this.$element.after( this.createView() );
            this.$newElement = this.$element.next('.bootstrap-select');
            if (this.options.container) {
                this.selectPosition();
            }
            this.button = this.$newElement.find('> button');
            if (id !== undefined) {
                this.button.attr('id', id);
                $('label[for="' + id + '"]').click( $.proxy(this, function(){ this.$newElement.find('button#'+id).focus(); }))
            }
            for (var i = 0; i < classList.length; i++) {
                if(classList[i] != 'selectpicker') {
                    this.$newElement.addClass(classList[i]);
                }
            }
            //If we are multiple, then add the show-tick class by default
            if(this.multiple) {
                 this.$newElement.addClass('show-tick'); 
            }
            this.button.addClass(this.options.style);
            this.checkDisabled();
            this.checkTabIndex();
            this.clickListener();
            
            //Listen for updates to the DOM and re render...    
            this.$element.bind('DOMNodeInserted DOMNodeRemoved', $.proxy(this.refresh, this));
            
            this.render();
            this.setSize();
        },

        createDropdown: function() {
            var drop =
                "<div class='btn-group bootstrap-select'>" +
                    "<button class='btn dropdown-toggle clearfix' data-toggle='dropdown'>" +
                        "<span class='filter-option pull-left'></span>&nbsp;" +
                        "<span class='caret'></span>" +
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
            $li = this.createLi();
            this.$newElement.find('ul').append( $li );
        },
        
        destroyLi:function() {
            this.$newElement.find('li').remove();
        },

        createLi: function() {

            var _this = this;
            var _li = [];
            var _liA = [];
            var _liHtml = '';
            
            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            this.$element.find('option').each(function(index) {
                //Get the class and text for the option
                var optionClass = $(this).attr("class") !== undefined ? $(this).attr("class") : '';
                var text =  $(this).text();
                var subtext = $(this).data('subtext') !== undefined ? '<small class="muted">'+$(this).data('subtext')+'</small>' : '';
                
                //Append any subtext to the main text.
                text+=subtext;

                if ($(this).parent().is('optgroup') && $(this).data('divider') != true) {
                    if ($(this).index() == 0) {
                        //Get the opt group label
                        var label = $(this).parent().attr('label');
                        var labelSubtext = $(this).parent().data('subtext') !== undefined ? '<small class="muted">'+$(this).parent().data('subtext')+'</small>' : '';
                        label += labelSubtext;
                  
                        if ($(this)[0].index != 0) {
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
                } else if ($(this).data('divider') == true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else {
                    _liA.push( _this.createA(text, optionClass ) );
                }
            });
               
            if (_li.length > 0) {
                for (var i = 0; i < _li.length; i++) {
                    var $option = this.$element.find('option').eq(i);
                    _liHtml += "<li rel=" + i + ">" + _liA[i] + "</li>";
                }
            }
            
            //If we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if(this.$element.find('option:selected').length==0 && !_this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }
            
            return $(_liHtml);
        },
        
        createA:function(test, classes) {
         return '<a tabindex="-1" href="#" class="'+classes+'">' +
                 '<span class="pull-left">' + test + '</span>' +
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
                if($(this).attr('title')!=undefined) {
                    return $(this).attr('title');
                } else {
                    return $(this).text();
                }
            }).toArray();
            
            //Convert all the values into a comma delimited string    
            var title = selectedItems.join(", ");
            
            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..                    
            if(_this.multiple && _this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = _this.options.selectedTextFormat.split(">");
                if( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = selectedItems.length +' of ' + this.$element.find('option').length + ' selected';
                }
             }  
            
            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if(!title) {
                title = _this.options.title != undefined ? _this.options.title : _this.options.noneSelectedText;    
            }
            
            _this.$newElement.find('.filter-option').html( title );
        },
        
        setSize:function() {
            var _this = this;
            var menu = this.$newElement.find('.dropdown-menu');
            var menuA = menu.find('li > a');
            var liHeight = this.$newElement.addClass('open').find('.dropdown-menu li > a').outerHeight();
            this.$newElement.removeClass('open');
            var divHeight = menu.find('li .divider').outerHeight(true);
            var selectOffset_top = this.$newElement.offset().top;
            var selectHeight = this.$newElement.outerHeight();
            var menuPadding = parseInt(menu.css('padding-top')) + parseInt(menu.css('padding-bottom')) + parseInt(menu.css('border-top-width')) + parseInt(menu.css('border-bottom-width'));
            if (this.options.size == 'auto') {
                function getSize() {
                    var selectOffset_top_scroll = selectOffset_top - $(window).scrollTop();
                    var windowHeight = window.innerHeight;
                    var menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2;
                    var selectOffset_bot = windowHeight - selectOffset_top_scroll - selectHeight - menuExtras;
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
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li').length > this.options.size) {
                var optIndex = menu.find("li > *").filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
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
             } else if (this.options.width && this.options.width != 'auto') {
                this.$newElement.css('width',this.options.width);
                if (this.options.container) {
                    this.$element.css('width',this.options.width);
                }
             }
        },

        selectPosition:function() {
            var selectElementTop = this.$element.offset().top;
            var selectElementLeft = this.$element.offset().left;
            this.$newElement.appendTo(this.options.container);
            this.$newElement.css({'position':'absolute', 'top':selectElementTop+'px', 'left':selectElementLeft+'px'});
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
                this.$newElement.find('li').eq(index).addClass('disabled');
            } else {
                this.$newElement.find('li').eq(index).removeClass('disabled');
            }
        },
       
        checkDisabled: function() {
            if (this.$element.is(':disabled')) {
                this.button.addClass('disabled');
                this.button.click(function(e) {
                    e.preventDefault();
                });
                this.button.on('focusin', function() {
                    $(this).blur();
                });
            } else if (!this.$element.is(':disabled') && this.button.hasClass('disabled')) {
                this.button.removeClass('disabled');
                this.button.click(function() {
                    return true;
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
                        _this.$element.find('option').removeAttr('selected');
                        _this.$element.find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                    } 
                    //Else toggle the one we have chosen if we are multi selet.
                    else {
                        var selected = _this.$element.find('option').eq(clickedIndex).prop('selected');
                        
                        if(selected) {
                            _this.$element.find('option').eq(clickedIndex).removeAttr('selected');
                        } else {
                            _this.$element.find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                        }
                    }
                    
                    
                    $select.find('.filter-option').html($this.text());
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
                $select = $(this).parent().parents('.bootstrap-select');
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
                    property = option;
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
        width: null,
        container: false
    }

}(window.jQuery);