require(['lib/events'], function(Events) {

	var documentController = {
		
		editor: $('.article.edit'),  
		
		init: function() {
			console.log('initing document controller', this.editor);
			this.wysiwygify();
		},
		
		wysiwygify: function() {
			tinymce.init({
			    selector: "textarea.article.edit",
			    plugins: "autoresize link video",
			    toolbar: "undo redo | styleselect | bold italic | link"
		 	});
		}		
		
	};
	
	$(function() {
		documentController.init();	
	})	
	
	return documentController;

});