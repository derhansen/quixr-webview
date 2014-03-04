'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Quixr Webview', function() {

  browser.get('index-e2e.html');

  it('should automatically redirect to /traffic when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/traffic");
  });


  describe('traffic', function() {

    beforeEach(function() {
        browser.get('index-e2e.html#/traffic');
    });


    it('should render traffic when user navigates to /traffic', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Traffic/);
    });

  });


  describe('diskspace', function() {

    beforeEach(function() {
      browser.get('index-e2e.html#/diskspace');
    });


    it('should render diskspace when user navigates to /diskspace', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Diskspace/);
    });

  });
});
