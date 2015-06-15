require.config({
    paths: {
        'baseUrl': '/public/scripts'
    },
    "packages": [
    ]
});

require(['controller/page-decider'], function(Decider) {

    Decider.init();

});