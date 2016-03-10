'use strict';

angular.module('financeApp.directives')
.directive('listButtons', [function() {
    return {
        restrict: 'E',
        scope: {
            buttons: '='
        },
        templateUrl: 'views/directives/listButtons.html'
    };
}]);
