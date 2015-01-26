/**
 * Created by bfulop on 20/01/15.
 */

app.facade =  {

    init : function (module_name) {
        this.module_name = module_name;
    },

    listen : function (event_name, callback) {
        app.core.registerEvent(this.module_name, event_name ,callback);
    },

    emit : function (event_name, data) {
        app.core.emitMessage(this.module_name, event_name, data);
    }

};

// DOM interfaces







// Messaging interfaces











// Security check when passing messages
// Configuration which module is allowed to pass which message



