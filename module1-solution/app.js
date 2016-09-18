(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', ['$scope', function($scope) {
            $scope.message = '';
            $scope.items = '';
            $scope.messageColor = '#000';

            $scope.checkItems = function() {
                if ($scope.items.length === 0) {
                    $scope.message = 'Please enter data first';
                    $scope.messageColor = 'red';
                    return false;
                }

                var itemsArr = $scope.items.split(',');
                var itemsCnt = 0;
                for (var i=0; i<itemsArr.length; i++) {
                    // do not count empty items!
                    if (itemsArr[i].trim().length !== 0) {
                        itemsCnt++;
                    }
                }

                if (itemsCnt <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
                $scope.messageColor = 'green';
            };
        }]);
})();