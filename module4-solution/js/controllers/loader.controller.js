(function () {

    'use strict';

    angular.module('LoaderModule')
            .controller('LoaderController', LoaderController);

    LoaderController.$inject = ['$rootScope'];
    function LoaderController($rootScope) {
        var ctrl = this,
                cancellers = [];

        ctrl.$onInit = function () {
            var cancel = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
                ctrl.showLoader= true;
            });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                ctrl.showLoader = false;
            });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                ctrl.showLoader = false;
            });
            cancellers.push(cancel);
        };

        ctrl.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };

    }

})();