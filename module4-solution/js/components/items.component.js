(function() {
    
    'use strict';
    
    angular.module('Data')
        .component('items', {
            bindings : {
                items : '<'
            },
            templateUrl : 'partials/items.html'
        });

})();