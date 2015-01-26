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
        facade.listen( 'NewTaskAdded', alertme );
    }

    return {
        init: init
    }
});

