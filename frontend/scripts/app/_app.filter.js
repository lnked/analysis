var app = app || {};

(function(body){
    "use strict";

    app.filter = {

        init: function()
        {
            var $filter;

            $('body').on('click', '.j-filter-trigger', function(e){
                e.preventDefault();

                $filter = $(this).closest('.j-filter');

                $filter.addClass('is-open');
                
                setTimeout(function() {
                    $filter.addClass('is-animate');  
                }, 10);

                // j-filter-dropdown

                return !1;
            });
        }

    };

})(document.body);