var app = app || {};

(function(body){
    "use strict";

    app.tabs = {

        init: function() {
            var $wrapper = null, tab = '';

            $('body').on('click', '.j-tab-trigger', function(e){
                e.preventDefault();

                if (!$(this).hasClass('is-open'))
                {
                    tab = $(this).data('tab');

                    $wrapper = $(this).closest('.j-tab-wrapper');

                    $wrapper.find('.j-tab-trigger').removeClass(' is-current');
                    $wrapper.find('.j-tab-item').removeClass('is-open');

                    $wrapper.find('#tab-'+tab).addClass('is-open');
                    $(this).addClass(' is-current');
                }

                return !1;
            });
        }

    };

})(document.body);