'use strict';

angular.module('financeApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/creditCards');

    $stateProvider
    .state('paymentsList', {
        url: '/payments',
        templateUrl:'views/payments/paymentList.html',
        controller: 'PaymentListController'
    })
    .state('creditCardsList', {
        url: '/creditCards',
        views: {
            'main@': {
                templateUrl:'views/creditCards/creditCardList.html',
                controller: 'CreditCardListCtrl'
            }
        }
    })
    .state('creditCardsList.add', {
        url: '/add',
        views: {
            'main@': {
                templateUrl: 'views/creditCards/creditCard.html',
                controller: 'CreditCardCtrl'
            }
        },
        resolve : {
            card: function() {
                return undefined;
            }
        }
    })
    .state('creditCardsList.edit', {
        url: '/edit',
        views: {
            'main@': {
                templateUrl: 'views/creditCards/creditCard.html',
                controller: 'CreditCardCtrl'
            }
        },
        params: {
            card: null
        },
        resolve : {
            card: ['CreditCardModel', '$stateParams', function(CreditCardModel, $stateParams) {
                return CreditCardModel.get({id: $stateParams.card._id});
            }]
        }
    });
}]);
