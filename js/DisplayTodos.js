/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('DisplayTodos', function (facade) {
    var stateMap = {};


    function alertme(data) {
        console.log("data received ", data);
    }

    function init(facade) {
        stateMap.myid   = this.myid;
        stateMap.facade = facade;
        console.log( "displaytodos initialised" );
        facade.listen( stateMap.myid, 'NewTaskAdded', alertme );
        facade.emit( stateMap.myid, 'NewTask', {
            desc: "my new task"
        });
    }

    return {
        init: init
    }
});

