define(['controller/document-controller'], function(DocumentController) {

	return {

		controller: null,
			
		init: function() {
			console.log('document page init');
			this.controller = DocumentController;
		}		
		
	};
	

});