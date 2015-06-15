define(['page/document-page'], function(DocumentPage) {

        return {

            init: function() {
                this.decidePage();
            },

            decidePage: function() {
                var loc = document.location.href;
                console.log("deciding page", loc);

                if (loc.indexOf('/d/') >= 0) {
                    DocumentPage.init();
                }
            }

        };

});