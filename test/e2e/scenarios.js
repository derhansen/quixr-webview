'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Quixr Webview', function() {

  browser.get('index.html');

  it('should automatically redirect to /traffic when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/traffic");
  });


  describe('traffic', function() {

    beforeEach(function() {
      browser.get('index.html#/traffic');
    });


    it('should render traffic when user navigates to /traffic', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for traffic/);
    });

  });


  describe('diskspace', function() {

    beforeEach(function() {
      browser.get('index.html#/diskspace');
    });


    it('should render diskspace when user navigates to /diskspace', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for diskspace/);
    });

  });
});
