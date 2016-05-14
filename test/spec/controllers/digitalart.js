'use strict';

describe('Controller: DigitalartCtrl', function () {

  // load the controller's module
  beforeEach(module('manasHomeApp'));

  var DigitalartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DigitalartCtrl = $controller('DigitalartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DigitalartCtrl.awesomeThings.length).toBe(3);
  });
});
