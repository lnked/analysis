var app = app || {};

(function(body){
    "use strict";

    app.swith = {

        init: function()
        {
            var $swith;

            $('body').on('click', '.j-swith-trigger', function(e){
                e.preventDefault();

                $swith = $(this).closest('.j-swith');
                
                if (!$swith.data('is-busy'))
                {
                    $swith.data('is-busy', true);

                    if ($swith.hasClass('is-open'))
                    {
                        $swith.removeClass('is-animate');

                        setTimeout(function() {
                            $swith.removeClass('is-open');
                            $swith.data('is-busy', false);
                        }, 250);
                    }
                    else
                    {
                        $swith.addClass('is-open');
                        
                        setTimeout(function() {
                            $swith.addClass('is-animate');
                            $swith.data('is-busy', false);
                        }, 10);
                    }
                }
            });
        }

    };

})(document.body);