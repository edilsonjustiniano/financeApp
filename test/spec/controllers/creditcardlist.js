'use strict';

describe('Controller: CreditcardlistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('financeApp'));

  var CreditcardlistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreditcardlistctrlCtrl = $controller('CreditcardlistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
