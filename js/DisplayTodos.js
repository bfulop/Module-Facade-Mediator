/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('mymodule', function (facade) {
    function alertme (data) {
        console.log("data received ", data);
    }

    function init (facade) {
        console.log( facade.gettext() );
        facade.listen('birthday', alertme);
        facade.emit('birthday', '15th February');
    }

    return {
        init: init
    }
});

