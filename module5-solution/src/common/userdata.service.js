(function() {
    
    'use strict';
    
    angular.module('common')
        .service('UserDataService', UserDataService);
    
    function UserDataService() {
        var service = this,
            userData = null;
        
        service.saveUserData = function(userData) {
            console.log('saveUserData: ', userData);
            this.userData = userData;
        };
        
        service.getUserData = function() {
            console.log(this.userData);
            return this.userData;
        };
    }
    
})();