var app = app || {};

(function(body){
    "use strict";

    app.dropdown = {

        doit: function($dropdown)
        {
            if (!$dropdown.hasClass('is-open'))
            {
                $dropdown.addClass('is-open');

                setTimeout(function(){
                    $dropdown.addClass('is-animate');
                }, 10);
            }
            else
            {
                $dropdown.removeClass('is-animate');

                setTimeout(function(){
                    $dropdown.removeClass('is-open');
                }, 250);  
            }
        },

        close: function($list, $dropdown)
        {
            var _this = this;

            $list.removeClass('is-animate');

            setTimeout(function(){
                $list.removeClass('is-open');

                if (typeof($dropdown) !== 'undefined')
                {
                    _this.doit($dropdown);
                }
            }, 250);
        },

        init: function()
        {
            var _this = this, $dropdown, $list;

            $('body').on('click', '.j-dropdown-trigger', function(e){
                e.preventDefault();

                $dropdown = $(this).closest('.j-dropdown');

                if ($(this).closest('.j-dropdown-list').length && !$dropdown.hasClass('is-open'))
                {
                    $list = $(this).closest('.j-dropdown-list');

                    if ($list.find('.j-dropdown.is-open').length)
                    {
                        _this.close($list.find('.j-dropdown.is-open'), $dropdown);
                    }
                    else
                    {
                        _this.doit($dropdown);
                    }
                }
                else
                {
                    _this.doit($dropdown);
                }
            });

            $('body').on('click', function(e){
                if (!$(e.target).closest('.j-dropdown').length && $('.j-dropdown.is-open').length)
                {
                    _this.close($('.j-dropdown.is-open'));
                }
            });
        }

    };

})(document.body);