'use strict';

/**
 * @ngdoc function
 * @name financeApp.controller:CreditcardlistctrlCtrl
 * @description
 * # CreditcardlistctrlCtrl
 * Controller of the financeApp
 */
angular.module('financeApp')
  .controller('CreditCardListCtrl', function ($scope) {
    $scope.cards = [{
        name: 'Itau',
        flag: 'Master Card',
        paymentDay: 10,
        closingDay: 1,
        number: 'testettasd 2dfs4114f8 1sd'
    }, {
        name: 'Nubank',
        flag: 'Master Card',
        paymentDay: 10,
        closingDay: 1,
        number: 'testettasd 2dfs4114f8 1sd'
    }, {
        name: 'BB',
        flag: 'Master Card',
        paymentDay: 10,
        closingDay: 1,
        number: 'testettasd 2dfs4114f8 1sd'
    }];

    $scope.query = {
        limit: 10,
        page: 0
    };
  });
