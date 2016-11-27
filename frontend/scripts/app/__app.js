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
            this.submenu.init();
            this.autoheight.init();
        }

    };

})(document.body);