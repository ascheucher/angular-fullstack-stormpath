'use strict';

describe('Controller: SecuredCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackStormpathApp'));

  var SecuredCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecuredCtrl = $controller('SecuredCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
