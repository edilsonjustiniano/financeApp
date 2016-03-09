'use strict';

angular.module('financeApp.directives')
.directive('menuBar', [ function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl : 'views/directives/menuBar.html',
        controller: ['$scope', function ($scope) {
            $scope.menuBar = {
                appTitle: 'Finance App',
                buttons: [
                    {
                        state: 'creditCardsList',
                        icon: 'credit_card',
                        text: 'Credit Card'
                    },
                    {
                        state: 'paymentsList',
                        icon: 'receipt',
                        text: 'Payments'
                    }
                ]
            };
        }]
    };
}]);
