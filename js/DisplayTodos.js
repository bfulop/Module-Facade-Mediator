/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('DisplayTodos', function definition () {
    var stateMap = {};


    function alertme(data) {
        console.log("data received ", data);
    }

    function init(facade) {
        stateMap.facade = facade;
        console.log( "displaytodos initialised" );
        facade.listen( 'NewTaskAdded', alertme );
        facade.emit( 'NewTask', {
            desc: "my new task"
        });
    }

    return {
        init: init
    }
});

