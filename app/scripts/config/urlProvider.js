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
            'navigator': {
                templateUrl: 'views/nav.html'
            },
            'main@': {
                templateUrl:'views/creditCards/creditCardList.html',
                controller: 'CreditCardListCtrl'
            }
        }
    })
    .state('creditCardsList.add', {
        url: '/add',
        views: {
            'navigator': {
                templateUrl: 'views/nav.html'
            },
            'main@': {
                templateUrl: 'views/creditCards/creditCard.html',
                controller: 'CreditCardCtrl'
            }
        }
    })
    .state('creditCardUpdate', {
        url: '/creditCard/edit',
        views: {
            'navigator': {
                templateUrl: '../../nav.html'
            },
            'main@': {
                templateUrl: '../../views/creditCards/creditCard.html',
                controller: 'CreditCardController'
            }
        },
        params: {
            creditCard: null
        },
        resolve : {
            creditCard: ['CreditCardService', '$stateParams', function(CreditCardService, $stateParams) {
                return CreditCardService.get($stateParams.creditCard._id);
            }]
        }
    });
}]);
