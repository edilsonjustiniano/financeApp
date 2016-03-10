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

    $scope.buttons = [{
        state: 'creditCardsList.add',
        class: 'md-fab md-primary md-hue-3',
        label: 'Add Card',
        icon: 'images/icons/add.svg'
    }];

    $scope.query = {
        order: 'bank',
        limit: 5,
        page: 1
    };

    $scope.listCreditCards = function() {
        CreditCardModel.query(function(creditCards) {
            $scope.cards = creditCards;
            $scope.onPaginate();
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

    $scope.onPaginate = function () {
        var begin = (($scope.query.page - 1) * $scope.query.limit),
            end = begin + $scope.query.limit;

        $scope.cardsToList = $scope.cards.slice(begin, end);
    };

    $scope.onReorder = function(order) {
        if ($scope.query.order.charAt(0) === '-') {
            $scope.query.order = order.substr(0);
        } else {
            $scope.query.order = '-' + order;
        }
        $scope.listCreditCards();
    };

    $scope.listCreditCards();
}]);
