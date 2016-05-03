'use strict';

describe('Controller: ComingsoonCtrl', function () {

  // load the controller's module
  beforeEach(module('manasHomeApp'));

  var ComingsoonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComingsoonCtrl = $controller('ComingsoonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComingsoonCtrl.awesomeThings.length).toBe(3);
  });
});
