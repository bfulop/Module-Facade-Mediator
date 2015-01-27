/**
 * Created by bfulop on 20/01/15.
 */

app.facade =  {

    init : function (module_name) {
        this.moduleName = module_name;
        this.rootElem = document.getElementById(module_name.toLowerCase());
    },
//    DOM methods

    find : function ( query ) {
        return this.rootElem.querySelector(query);
    },

    addEvent : function ( targetelem, eventname, callback) {
        targetelem.addEventListener(eventname, callback, false);
    },
    
    appendSingleElem : function ( targetelem, sourcelem_map ) {
        var newelem = document.createElement( sourcelem_map.tag_name );
        newelem = text (newelem, sourcelem_map.txt );

        function text ( node, txt ) {
            node.appendChild( document.createTextNode( txt ) );
            return node;
        }

        targetelem.appendChild(newelem);

    },

    


//    event handling

    listen : function (event_name, callback) {
        app.core.registerEvent(this.moduleName, event_name ,callback);
    },

    emit : function (event_name, data) {
        app.core.emitMessage(this.moduleName, event_name, data);
    }

};

// DOM interfaces







// Messaging interfaces











// Security check when passing messages
// Configuration which module is allowed to pass which message



