(function() {
    angular.module('Data')
        .component('items', {
            bindings : {
                items : '<'
            },
            template : '',
            controller : ItemsComponentController
        });
    
    function ItemsComponentController(items) {
        var $ctrl = this;
        
        $ctrl.items = items;
    }
});