'use strict';

describe('Service: sampleDataProvider', function () {

  // load the service's module
  beforeEach(module('walletApp'));

  // instantiate service
  var sampleDataProvider;
  beforeEach(inject(function (_sampleDataProvider_) {
    sampleDataProvider = _sampleDataProvider_;
  }));

  it('should do something', function () {
    expect(!!sampleDataProvider).toBe(true);
  });

});
