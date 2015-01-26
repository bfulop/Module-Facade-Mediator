/**
 * Created by bfulop on 20/01/15.
 */

app.core.define('AddTodo', function definition () {
    var stateMap = {
        domelemMap : {}
    };

    function addtodo ( event ) {
        var todo_text = stateMap.domelemMap.inputfield.value;
        stateMap.facade.emit( 'NewTask', {
            desc : todo_text
        } );
        event.preventDefault();
        event.stopPropagation();

    }


    function alertme(data) {
        console.log("data received ", data);
    }

    function init(facade) {
        stateMap.facade = facade;

        //        set up the DOM elements
        stateMap.domelemMap.inputfield = facade.find('.addtodo-input');
        stateMap.domelemMap.addbutton  = facade.find('.addtodo-submit');

        stateMap.facade.addEvent(stateMap.domelemMap.addbutton, 'click', addtodo);

    }

    return {
        init: init
    }
});

