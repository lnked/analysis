var app = app || {};

(function(body){
    "use strict";

    app.filter = {

        init: function()
        {
            var $filter;

            $('body').on('click', function(e){
                if ($('.j-filter-dropdown.is-open').length)
                {
                    if (!$(e.target).closest('.j-filter').length && !$(e.target).hasClass('j-filter'))
                    {
                        $filter = $('.j-filter-dropdown.is-open');
                        $filter.removeClass('is-animate');

                        setTimeout(function() {
                            $filter.removeClass('is-open');
                            $filter.data('is-busy', false);
                        }, 250);
                    }
                }
            });

            $('body').on('click', '.j-filter-clear', function(e){
                e.preventDefault();
                $filter = $(this).closest('.j-filter');
                $filter.find('.j-filter-value').html('');

                $filter.removeClass('is-checked');
            });

            $('body').on('click', '.j-filter-trigger', function(e){
                e.preventDefault();

                if (!$(e.target).hasClass('j-filter-clear'))
                {
                    $filter = $(this).closest('.j-filter').find('.j-filter-dropdown');
                    
                    if (!$filter.data('is-busy'))
                    {
                        $filter.data('is-busy', true);

                        if ($filter.hasClass('is-open'))
                        {
                            $filter.removeClass('is-animate');

                            setTimeout(function() {
                                $filter.removeClass('is-open');
                                $filter.data('is-busy', false);
                            }, 250);
                        }
                        else
                        {
                            $filter.addClass('is-open');
                            
                            setTimeout(function() {
                                $filter.addClass('is-animate');
                                $filter.data('is-busy', false);
                            }, 10);
                        }
                    }
                }
            });
        }

    };

})(document.body);