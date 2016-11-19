var app = app || {};

(function(body){
    "use strict";

    app.dropdown = {

        init: function()
        {
            var $dropdown;

            $('body').on('click', '.j-dropdown-trigger', function(e){
                e.preventDefault();

                $dropdown = $(this).closest('.j-dropdown');

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
            });
        }

    };

})(document.body);