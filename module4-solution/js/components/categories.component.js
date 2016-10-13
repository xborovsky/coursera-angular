(function() {
    
    'use strict';
    
    angular.module('Data')
        .component('categories', {
            bindings : {
                categories : '<'
            },
            templateUrl : 'partials/categories.html'
        });

})();