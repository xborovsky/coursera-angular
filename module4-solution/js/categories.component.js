(function() {
    angular.module('Data')
        .component('categories', {
            bindings : {
                categories : '<'
            },
            template : '',
            controller : CategoriesComponentContoller
        });
    
    function CategoriesComponentContoller(categories) {
        var $ctrl = this;
                
        $ctrl.categories = categories;
    }
})();