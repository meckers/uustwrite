var locomotive = require('locomotive'),
    couchdb = require('node-couchdb'), 
    Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
}

pagesController.document = function(id) {  
  this.id = id;
  this.render();
}

module.exports = pagesController;
