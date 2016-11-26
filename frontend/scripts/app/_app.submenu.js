var app = app || {};

(function(body){
    "use strict";

    app.submenu = {

        init: function()
        {
            var $submenu;

            $('body').on('mouseenter', '.j-submenu', function(e){
                $submenu = $(this).find('.submenu');

                if ($submenu.length && !$submenu.hasClass('is-animate'))
                {
                    $submenu.addClass('is-open');

                    setTimeout(function(){
                        $submenu.addClass('is-animate');
                    }, 10);
                }
            });

            $('body').on('mouseleave', '.j-submenu', function(e){
                $submenu = $(this).find('.submenu');

                if ($submenu.length)
                {
                    $submenu.removeClass('is-animate');

                    setTimeout(function(){
                        $submenu.removeClass('is-open');
                    }, 250);
                }
            });
        }

    };

})(document.body);