(function() {
    angular.module('Data')
        .constant('DataConfig', DataConfig)
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', 'DataConfig'];
    function MenuDataService($http, DataConfig) {
        var service = this;
        
        service.getAllCategories = function() {
            return $http.get(DataConfig.categoriesUrl);
        };
        
        service.getItemForCategory = function(categoryShortName) {
            return $http.get(DataConfig.categoryUrl, {
                params : {category : categoryShortName}
            });
        };
    }
    
    var DataConfig = {
        'categoriesUrl' : 'https://davids-restaurant.herokuapp.com/categories.json',
        'categoryUrl' : 'https://davids-restaurant.herokuapp.com/menu_items.json'
    };
})();