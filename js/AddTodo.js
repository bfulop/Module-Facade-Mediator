/**
 * Created by bfulop on 20/01/15.
 */

// Module for handling the detection and publication of Todo user-input
// The idea here is that if other modules in the system wish to then
// consume this data, add it to a list etc. this specific module doesn't
// need to be concerned with actions other than event publication.

// The first line represents the module definition syntax
// The signature for this is:
// aura.core.define(module_container, module_factory(facade));

app.core.define('#todo-entry', function (f) {
    var input, button = null;
    return {
        // Initialization function called when the module is
        // started by the mediator/application core. Modules
        // are automatically executed upon load.
        init: function () {
            // The facade (f) (amongst other things) provides
            // secure abstracted access to DOM query and manipulation
            // methods .find() is local to the module_container
            // .query() is a more general query method supporting
            // jQuery/querySelectorAll like querying with or without
            // a context..css () supports styling etc.
            // These map through the mediator back to specific library/toolkit
            // methods for performing the actual actions behind the scenes
            input = f.find('input'),
                button = f.find('button');

            // Bind click events to an 'add entry' button
            f.bind(button, 'click', this.handleEntry);
            // Bind keydown events to the 'todo entry' input text field
            f.bind(input, 'keydown', this.handleKey);

        },

        // All modules have both an initialization routine
        // and a method for destroying them. Andrew Burgess has
        // previously looked at a similar init/destroy pattern for
        // this architecture which may be maintained for Aura.
        destroy: function () {
            f.unbind(button, "click", this.handleEntry);
            f.unbind(input, "keydown", this.handleKey);
            input = button = reset = null;
        },

        handleEntry: function () {
            // Publish an event notification to the rest of the application
            // passing through the necessary data for other modules to either
            // look-up the new entry or perform further manipulation to it.
            // One could technically pass a cached reference to the DOM element
            // containing the new entry, but there may be performance implications
            // of using Pub/Sub in that manner.
            f.publish({
                type: 'new-entry',
                data: {
                    value: input.value,
                    id: f.newGUID()
                }
            });
        },

        handleKey: function (e) {
            if (e.which == 13) {
                // Similar to handleKey, we can publish events when something
                // interesting happens in the application. Ideally, you would
                // avoid any repetition and maintain DRY coding concepts, but
                // for the purposes of demonstration this is fine.
                f.publish({
                    type: 'new-entry-',
                    data: {
                        value: input.value,
                        id: f.newGUID()
                    }
                });

            }
        }
    }
});