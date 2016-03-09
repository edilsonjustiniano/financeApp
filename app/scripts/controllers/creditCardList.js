'use strict';

/**
* @ngdoc function
* @name financeApp.controller:CreditcardlistctrlCtrl
* @description
* # CreditcardlistctrlCtrl
* Controller of the financeApp
*/
angular.module('financeApp')
.controller('CreditCardListCtrl',
['$scope', '$state', '$mdToast', 'CreditCardModel', function ($scope, $state, $mdToast, CreditCardModel) {

    $scope.query = {
        order: 'bank',
        limit: 5,
        page: 1
    };

    $scope.listCreditCards = function() {
        CreditCardModel.query(function(creditCards) {
            $scope.cards = creditCards;
        });
    };

    $scope.edit = function(card) {
        $state.go('creditCardsList.edit', {card: card});
    };

    $scope.delete = function(card) {
        card.$delete($scope.successDeleteCard, $scope.errorToDeleteCard);
    };

    $scope.successDeleteCard = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Credit Card successfuly deleted!')
            .position('bottom right')
        );
        $scope.listCreditCards();
    };

    $scope.errorToDeleteCard = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Error to delete card!')
            .position('bottom right')
        );
    };

    $scope.listCreditCards();
}]);
