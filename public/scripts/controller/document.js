require([], function() {

	var documentController = {
		
		editor: $('.article.edit'),  
		
		init: function() {
			console.log('initing document controller', this.editor);
			this.wysiwygify();
		},
		
		wysiwygify: function() {
			$('.article.edit').wysiwyg({
				classes: '',
				toolbar: 'top'
			});
		}
		
		
	};
	
	$(function() {
		documentController.init();	
	})	
	
	return documentController;

});