(function() {
    
    'use strict';
    
    angular.module('LoaderModule')
        .component('loader', {
            templateUrl : 'templates/loader.template.html',
            controller : 'LoaderController as loaderCtrl'
        });
    
})();