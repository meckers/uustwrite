function requireConfig() {
    require.config({
	    paths: {
	        'baseUrl': '/public/scripts'
	    },
	    "packages": [
	    ]
	});
	console.log('require configured!');
}