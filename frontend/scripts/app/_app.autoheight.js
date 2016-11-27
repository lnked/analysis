var app = app || {};

(function(body){
    "use strict";

    app.autoheight = {

        resize: function()
        {
            $('.j-auto-height').css('min-height', 0);

            var dh = $(document).height() - 51 - 64 - 40 - 1;
         
            $('.j-auto-height').each(function(){
                if ($(this).height() < dh)
                {
                    $(this).css({
                        'min-height': dh
                    });
                }
            });
        },

        init: function()
        {
            if ($('.j-auto-height').length)
            {
                var timeout;
                app.autoheight.resize();

                $(window).on('resize', function(){
                    clearTimeout(timeout);
                    timeout = setTimeout(function(){
                        app.autoheight.resize();
                    }, 150);
                });
            }
        }

    };

})(document.body);