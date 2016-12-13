var app = app || {};

(function(body){
    "use strict";

    app.mask = {

        init: function()
        {
            if ($('.input-phone').length)
            {
                new Cleave('.input-phone', {
                    phone: true,
                    phoneRegionCode: 'ru'
                });   
            }
        }

    };

})(document.body);