(function() {
    
    'use strict';
    
    angular.module('MenuApp')
        .config(RouteConfig);
    
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'templates/home.template.html'
            })
            .state('categories', {
                url : '/categories',
                templateUrl : 'templates/categories.template.html',
                resolve : {
                    categories : ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller : 'CategoriesController',
                controllerAs : 'catCtrl'
            })
            .state('items', {
                url : '/items/{shortName}',
                templateUrl : 'templates/items.template.html',
                resolve : {
                    items : ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemForCategory($stateParams.shortName);
                    }]
                },
                controller : 'ItemsController',
                controllerAs : 'itemsCtrl'
            });

    }
})();