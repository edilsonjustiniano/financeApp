'use strict';

/**
* @ngdoc service
* @name financeApp.Creditcard
* @description
* # Creditcard
* Factory in the financeApp.
*/
angular.module('financeApp')
.factory('CreditCardModel', ['$resource', function ($resource) {

    return $resource('/creditCard/:id', null,
        {
            edit: {method: 'PUT'},
            delete: {method: 'DELETE', params: {id: '@_id'}}
        }
    );
}]);
