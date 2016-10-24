(function() {
    
    'use strict';
    
    angular.module('public')
        .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['UserDataService', 'MenuService'];
    function SignUpController(UserDataService, MenuService) {
        var ctrl = this;
        ctrl.userData = {
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            shortName : ''
        };
        ctrl.favoriteChoiceHasErr = false;
        ctrl.favoriteChoiceErr = null;
        ctrl.infoSaved = false;
        
        ctrl.save = function() {
            MenuService.getMenuItem(ctrl.userData.shortName).then(function(result) {
                UserDataService.saveUserData(ctrl.userData);
                ctrl.infoSaved = true;
                ctrl.favoriteChoiceHasErr = false;
            }, function(error) {
                ctrl.favoriteChoiceHasErr = true;
                ctrl.favoriteChoiceErr = 'No such menu number exists';
            });
        };
    }
    
})();