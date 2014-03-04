'use strict';

angular.module('e2e-mocks', ['ngMockE2E'])
    .run(function($httpBackend) {

        $httpBackend.whenGET('data/quixr.json').respond({'vhost1':{'traffic':{'2014':{'1':{'1':1024000}}}}});

        // Don't mock the html views
        $httpBackend.whenGET(/views\/\w+.*/).passThrough();

        // For everything else, don't mock
        $httpBackend.whenGET(/^\w+.*/).passThrough();
        $httpBackend.whenPOST(/^\w+.*/).passThrough();
});

angular.module('quixrWebview').requires.push('e2e-mocks');