(function() {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService) {
        this.toBuyItems = ShoppingListCheckOffService.getItemsToBuy();
        
        this.buyItem = function(item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 2 },
            { name: "coca cola bottles", quantity: 4 },
            { name: "toilet papers", quantity: 40 },
            { name: "cheese", quantity: 1 }
            ],
            boughtItems = [];
        
        this.getItemsToBuy = function() {
            return itemsToBuy;
        };
        
        this.getBoughtItems = function() {
            return boughtItems;
        };
        
        this.buyItem = function(item) {
            itemsToBuy.splice(itemsToBuy.indexOf(item), 1);
            boughtItems.push(item);
        };
    }
    
})();