'use strict';

describe('Controller: SketchesCtrl', function () {

  // load the controller's module
  beforeEach(module('manasHomeApp'));

  var SketchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SketchesCtrl = $controller('SketchesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SketchesCtrl.awesomeThings.length).toBe(3);
  });
});
