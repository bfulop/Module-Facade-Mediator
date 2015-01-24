/**
 * Created by bfulop on 20/01/15.
 */

var app = (function app ()  {
    'use strict';
    //var startApp = function () {
    //    app.core.startAll();
    //};
    //
    //return { startApp: startApp }
});


// This is the mediator / Application Core
app.core = (function appcore() {
    var stateMap = {};


//    define modules
    stateMap.modules = {};

    function define(name, impl) {
        stateMap.modules[name] = impl.apply(impl);
        stateMap.modules[name].myid = name;
    }

    function get (module_name) {
        return stateMap.modules[module_name];
    }

    function startModule (module_name) {
        stateMap.modules[module_name].init(app.facade);
    }

    // start up the modules
    function startAll () {
        var moduleid;
        for (moduleid in stateMap.modules) {
            startModule(moduleid);
        }

    }


    // Events handling
    stateMap.events = {};

    function registerEvent (module_name, event_name, callback) {
        if (!stateMap.events[module_name]) {
            stateMap.events[module_name] = {};
        }
        stateMap.events[module_name][event_name] = callback;
    }

    function emitMessage (event_name, data) {
        var amodule;
        for (amodule in stateMap.events) {
            if (stateMap.events[amodule] ) {
                stateMap.events[amodule][event_name](data);
            }
        }
    }


    // return public functions
    return {
        //return module related methods
        define: define,
        startall: startAll,
        startModule: startModule,
        get: get,

    //    return event handling methods
        registerEvent: registerEvent,
        emitMessage: emitMessage
    }


}());







// Manage pub/sub by modules





// Start and stop modules





