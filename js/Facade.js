/**
 * Created by bfulop on 20/01/15.
 */

app.facade = (function () {
    function gettext () {
        return "ez egy text";
    }

    function listen (module_name, event_name, callback) {
        app.core.registerEvent(module_name, event_name ,callback);
    }

    function emit (module_name, event_name, data) {
        app.core.emitMessage(module_name, event_name, data);
    }

    return {
        gettext: gettext,
        listen: listen,
        emit: emit
    }

}());

// DOM interfaces







// Messaging interfaces











// Security check when passing messages
// Configuration which module is allowed to pass which message



