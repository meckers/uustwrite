require(['controller/document-controller'], function(DocumentController) {

	var landingPage = {

		controller: null,
			
		init: function() {
			this.controller = DocumentController;
		}		
		
	};
	
	$(function() {
		landingPage.init();	
	})	
	
	return landingPage;

});