/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('DisplayTodos', function definition () {
    var stateMap = {
        domelemMap : {}
    };

    function addnewtodo ( todo_map ) {
        stateMap.facade.appendSingleElem( stateMap.domelemMap.todolist, {
            tag_name : 'li',
            txt      : todo_map.desc
        } );
    }

    function alertme(data) {
        console.log("data received ", data);
    }

    function init(facade) {
        stateMap.facade = facade;

        stateMap.domelemMap.todolist = facade.find('.displaytodos-todolist');
        facade.listen( 'NewTaskAdded', addnewtodo );
    }

    return {
        init: init
    }
});

