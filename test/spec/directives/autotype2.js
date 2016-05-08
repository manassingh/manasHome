'use strict';

describe('Directive: autoType2', function () {

  // load the directive's module
  beforeEach(module('manasHomeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<auto-type2></auto-type2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autoType2 directive');
  }));
});
