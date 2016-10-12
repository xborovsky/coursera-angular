(function() {
    angular.module('MenuApp')
        .config(RouteConfig);
    
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'partials/home.html'
            })
            .state('categories', {
                url : 'categories',
                template : 'parials/categories.html'
            });
        
    }
})();