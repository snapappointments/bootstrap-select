!function($) {
    var ScrollYou = function(element, options, e) {
        if(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        this.$element = $(element);
        this.options = options;
        this.init();
    }

    ScrollYou.prototype = {
        contructor: ScrollYou,

        init: function(e) {
            this.$element.addClass('scrollyou')
            this.render();
            this.scrollListener();
            this.initialTop = parseInt(this.$scroll.css('top'), 10);
        },

        render: function() {
            var scroll = this.options.scroll || '<div/>';
            this.$scroll = $(scroll);
            this.$scroll.addClass('scrollyou-bar');

            this.$element.append(this.$scroll);
        },

        scrollListener: function() {
            var that = this;
            var acell = this.options.acell || 3,
                height = this.getHeight();

            this.$element.on('mousewheel', $.proxy(function(event, delta, deltaX, deltaY) {
                var topf;

                event.preventDefault();
                event.currentTarget.scrollTop -= (delta * acell);

                topf = event.currentTarget.scrollTop + this.initialTop +
                       event.currentTarget.scrollTop * (this.$element.outerHeight(true)) / height;

                this.$scroll.css({
                    'top': topf
                });
            }, this));
        },

        getHeight: function() {
            if(this.options.height) {
                return this.options.height;
            }

            if(!this.$element.children().length) {
                console.error('Your element must have babies (children)');
            }

            var hide = false, height;

            if(!this.$element.is(':visible')) {
                this.$element.css('display','block');
                hide = true;
            }

            height = this.$element.children().outerHeight(true) * this.$element.children().length;

            if(hide) {
                this.$element.css('display','');
            }

            return height;
        }
    },

    $.fn.scrollyou = function(option, event) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('scrollyou'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('scrollyou', (data = new ScrollYou(this, options, event)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

}(window.jQuery);
