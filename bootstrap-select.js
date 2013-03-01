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
        this.title = this.options.title;
        this.notSelectedText = this.options.notSelectedText;
        this.selectedText = this.options.selectedText;
        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function (e) {
            this.$element.hide();
            this.multiple = this.$element.prop('multiple');
            //Favour the JS option over the attribute
            if(this.title==null)
                this.title = this.$element.attr('title'); 
            var classList = this.$element.attr('class') !== undefined ? this.$element.attr('class').split(/\s+/) : '';
            var id = this.$element.attr('id');
            this.$element.after( this.createView() );
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
            //If we are multiple, then add the show-tick class by default
            if(this.multiple) {
                 this.$newElement.addClass('show-tick'); 
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
            
            //Listen for updates to the DOM and re render...    
            this.$element.bind('DOMNodeInserted', $.proxy(this.reloadLi, this));
            
            this.render();
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
            //render view
            this.render();
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

            this.$element.find('option').each(function() {
                var optionClass = $(this).attr("class") !== undefined ? $(this).attr("class") : '';
                
                var aTag = '<a tabindex="-1" href="#" class="opt '+optionClass+'">' +
                                $(this).text() + 
                                '<i class="icon-ok pull-right check-mark"></i>' + 
                            '</a>';
                
                if ($(this).parent().is('optgroup') && $(this).data('divider') != true) {
                    if ($(this).index() == 0) {
                        if ($(this)[0].index != 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+$(this).parent().attr('label')+'</dt>'+ aTag
                                );
                        } else {
                            _liA.push('<dt>'+$(this).parent().attr('label')+'</dt>'+ aTag);
                        }
                    } else {
                         _liA.push(aTag);
                    }
                } else if ($(this).data('divider') == true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else {
                    _liA.push(aTag);
                }
            });
               
            if (_li.length > 0) {
                for (var i = 0; i < _li.length; i++) {
                    var $option = this.$element.find('option').eq(i);
                    _liHtml += "<li rel=" + i + ">" + _liA[i] + "</li>";
                }
            }
            
            //If we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if(this.$element.find('option:selected').length==0 && !_this.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }
            
            return $(_liHtml);
        },
        
         render:function() {
	        var _this = this;
	        
            //Update the LI to match the SELECT
            this.$element.find('option').each(function(index) {
               _this.setDisabled($(this).index(), $(this).is(':disabled') );
               _this.setSelected($(this).index(), $(this).is(':selected') );
            });
            
            var selectedItems = this.$element.find('option:selected').map(function(index,value) {
                if($(this).attr('title')!=undefined) {
                    return $(this).attr('title');
                } else {
                    return $(this).text();
                }
            }).toArray();
            
            //Convert all the values into a comma delimited string    
            var title = selectedItems.join(",");
            
            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..                    
            if(_this.multiple && _this.selectedText.indexOf('count') > -1) {
                var max = _this.selectedText.split(">");
                if( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = selectedItems.length +' of ' + this.$element.find('option').length + ' selected';
                }
             }  
            
            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if(!title) {
                title = _this.title != undefined ? _this.title : _this.notSelectedText;    
            }
            
            this.$element.next('.bootstrap-select').find('.filter-option').html( title );
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
            
            this.$newElement.find('li.disabled a, li dt, li .div-contain').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $select = $(this).parent().parents('.bootstrap-select');
                $select.find('button').focus();
            });
            
            this.$newElement.on('click', 'li a', function(e){
                var clickedIndex = $(this).parent().index(),
                    $this = $(this).parent(),
                    $select = $this.parents('.bootstrap-select');
                
                
                //Dont close on multi choice menu    
                if(_this.multiple) {
                    e.stopPropagation();
                }
                
                e.preventDefault();
                
                if ($select.prev('select').not(':disabled')){
                    //Deselect all others if not multi select box
                    if (!_this.multiple) {
                        $select.prev('select').find('option').removeAttr('selected');
                        $select.prev('select').find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                    } 
                    //Else toggle the one we have chosen if we are multi selet.
                    else {
                        var selected = $select.prev('select').find('option').eq(clickedIndex).prop('selected');
                        
                        if(selected) {
                            $select.prev('select').find('option').eq(clickedIndex).removeAttr('selected');
                        } else {
                            $select.prev('select').find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                        }
                    }
                    
                    
                    $select.find('.filter-option').html($this.text());
                    $select.find('button').focus();

                    // Trigger select 'change'
                    $select.prev('select').trigger('change');
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
        }

    };

    $.fn.selectpicker = function(option, event) {
       //get the args of the outer function..
       var args = arguments;
       return this.each(function () {
            var $this = $(this),
                data = $this.data('selectpicker'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
            }
            
            if (typeof option == 'string') {
                //Copy the value of option, as once we shift the arguments
                //it also shifts the value of option.
                property = option;
                [].shift.apply(args);
                data[property].apply(data, args);
            }
        });
    };

    $.fn.selectpicker.defaults = {
        style: null,
        size: 'auto',
        title:null,
        selectedText : 'values',
        notSelectedText : 'Nothing selected'
    }

}(window.jQuery);