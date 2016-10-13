(function() {
    
    'use strict';
    
    angular.module('Data')
        .constant('DataConfig', {
            'categoriesUrl' : 'https://davids-restaurant.herokuapp.com/categories.json',
            'categoryUrl' : 'https://davids-restaurant.herokuapp.com/menu_items.json'
        })
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', 'DataConfig', '$timeout'];
    function MenuDataService($http, DataConfig, $timeout) {
        var service = this;
        
        service.getAllCategories = function() {
            // add some timeout for the loader to show
            // not really needed for the code to work
            return $timeout(function() {
                return $http.get(DataConfig.categoriesUrl);
            }, 800);
        };
        
        service.getItemForCategory = function(categoryShortName) {
            // add some timeout for the loader to show
            // not really needed for the code to work
            return $timeout(function() {
                return $http.get(DataConfig.categoryUrl, {
                    params : {category : categoryShortName}
                });
            }, 800);
        };
    }

})();