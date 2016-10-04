(function() {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = '',
        ctrl.found = [],
        ctrl.showNothingFoundMsg = false;
        
        ctrl.doNarrowing = function() {
            if (ctrl.searchTerm.trim().length === 0) {
                ctrl.found = [];
                ctrl.showNothingFoundMsg = true;
            } else {
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
                promise.then(function(result) {
                    ctrl.found = result;
                    ctrl.showNothingFoundMsg = (ctrl.found.length === 0);
                });
            }
        };
        
        ctrl.removeItem = function(idx) {
            console.log('removeItem: ' + idx);
            ctrl.found.splice(idx, 1);
        };
        
    }
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        this.getMatchedMenuItems = function(searchTerm) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function(result) {
                var foundItems = result.data['menu_items'];
                var found = [];
                
                for (var i=0; i<foundItems.length; i++) {
                    if (foundItems[i].description.indexOf(searchTerm) !== -1) {
                        found.push(foundItems[i]);
                    }
                }
                
                return found;
            });
        };
    }
    
    function FoundItemsDirective() {
        return {
            restrict : 'E',
            scope : {
                foundItems : '<',
                onRemove : '&'
            },
            template : '<table class="table table-striped" ng-if="ctrl.foundItems.length !== 0">' +
                            '<thead>' +
                                '<tr>' +
                                    '<th>name</th>' +
                                    '<th>short name</th>' +
                                    '<th>description</th>' +
                                    '<th>&nbsp;</th>' +
                                '</tr>' +
                            '<tbody>' +
                                '<tr ng-repeat="item in ctrl.foundItems">' +
                                    '<td>{{item.name}}</td>' +
                                    '<td>{{item.short_name}}</td>' +
                                    '<td>{{item.description}}</td>' +
                                    '<td><button ng-click="ctrl.onRemove({index : $index})">Don\'t want this one!</button></td>' +
                                '</tr>' +
                            '</tbody>' +
                        '</table>',
            controller : NarrowItDownController,
            controllerAs : 'ctrl',
            bindToController : true
        };
    }
    
})();