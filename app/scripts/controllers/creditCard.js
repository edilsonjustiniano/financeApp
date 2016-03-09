'use strict';

/**
* @ngdoc function
* @name financeApp.controller:CreditcardlistctrlCtrl
* @description
* # CreditcardlistctrlCtrl
* Controller of the financeApp
*/
angular.module('financeApp')
.controller('CreditCardCtrl', ['$scope', '$mdDialog', '$mdToast', '$state', 'CreditCardModel', 'card',
function ($scope, $mdDialog, $mdToast, $state, CreditCardModel, card) {

    $scope.creditCard = card || {};

    $scope.save = function() {
        if ($scope.creditCard._id) {
            CreditCardModel.edit($scope.creditCard, $scope.successfulySavedCard, $scope.errorToSave);
        } else {
            CreditCardModel.save($scope.creditCard, $scope.successfulySavedCard, $scope.errorToSave);
        }
    };

    $scope.successfulySavedCard = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Credit Card successfuly saved!')
            .position('bottom right')
        );
        $state.go('creditCardsList');
    };

    $scope.errorToSave = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Error to save card!')
            .position('bottom right')
        );
    };

    $scope.cancel = function() {
        $mdDialog
        .show($mdDialog.confirm({
            title: 'Confirm',
            textContent: 'All changes will be lost. Are you sure?',
            ok: 'Yes',
            cancel: 'No'
        }))
        .then(function() {
            $state.go('creditCardsList');
        });
    };

}]);
