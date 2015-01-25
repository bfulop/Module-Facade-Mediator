/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('mymodule', function (facade) {
    function alertme (data) {
        console.log("data received ", data);
    }

    function init (facade) {
        var myid = this.myid;
        console.log( facade.gettext() );
        facade.listen(myid, 'birthday', alertme);
        facade.listen(myid, 'happy', alertme);
        facade.emit(myid, 'birthday', '15th February');
        facade.emit(myid, 'happy', 'happy message');
    }

    return {
        init: init
    }
});

