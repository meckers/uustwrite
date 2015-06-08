define([
    'controller/mediator'
],
    function(Mediator) {

        return {

            init: function() {
                this.startApp();
            },

            /**
             * Initialize the controllers that listens for events
             */
            startApp: function() {
                Mediator.init();
            }

        };

    });