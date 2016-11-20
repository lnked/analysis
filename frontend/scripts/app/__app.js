var app = app || {};

(function(body){
    "use strict";

    app = {
        
        init: function()
        {
            this.tabs.init();
            this.swith.init();
            this.filter.init();
            this.dropdown.init();

            // this.map.init();
            // this.faq.morph();
            // this.fixmenu.init();
            // this.ajaxForm.init();
        }

    };

})(document.body);