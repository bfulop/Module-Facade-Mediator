/**
 * Created by bfulop on 20/01/15.
 */


app.core.define( 'TodosModel', function ( facade ) {
    var stateMap = {
        cid_serial   : 1,
        todo_cid_map : {}
    };

    function addTask ( task_map ) {

    }

    function makeCid () {
        return 'c' + String( stateMap.cid_serial++ );
    }

    var taskProto = {
        //    common methods shared by all tasks
    };

    // Todos API
    function getTodos () {
        //    emit event with all the todos
    }

    function getTask ( task_id ) {

    }

    // create a new task
    function setTask ( task_map ) {
        var task,
            cid    = makeCid(),
            desc   = task_map.desc;

        task        = Object.create( taskProto );
        task.cid    = cid;
        task.desc   = desc;
        task.isdone = false;

        stateMap.todo_cid_map[ task.cid ] = task;

        stateMap.facade.emit( stateMap.myid, 'NewTaskAdded', stateMap.todo_cid_map[ task.cid ] );

    }

    // Todos API end

    function init ( facade ) {
        stateMap.myid   = this.myid;
        stateMap.facade = facade;
        console.log( "todosmodel inititialised" );
        facade.listen( stateMap.myid, 'NewTask', setTask );
    }

    return {
        init : init
    }

} );