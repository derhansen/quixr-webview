'use strict';

angular.module('e2e-mocks', ['ngMockE2E'])
    .run(function($httpBackend) {

        var response = {'vhost1':{'traffic':{'2014':{'1':{'1':1024},'2':{'1':1048576},'3':{'1':1073741824},'4':{'1':1099511600000},'5':{'1':1024,'2':2048,'3':4096}}},'diskspace':{'2014':{'1':{'1':1024},'2':{'1':1048576},'3':{'1':1073741824},'4':{'1':1099511600000},'5':{'1':1024,'2':2048,'3':4096}}}}, 'vhost2':{'traffic':{'2014':{'1':{'1':1024},'2':{'1':1048576},'3':{'1':1073741824},'4':{'1':1099511600000}}},'diskspace':{'2014':{'1':{'1':1024},'2':{'1':1048576},'3':{'1':1073741824},'4':{'1':1099511600000}}}}};

        $httpBackend.whenGET('data/quixr.json').respond(response);

        // Don't mock the html views
        $httpBackend.whenGET(/views\/\w+.*/).passThrough();

        // For everything else, don't mock
        $httpBackend.whenGET(/^\w+.*/).passThrough();
        $httpBackend.whenPOST(/^\w+.*/).passThrough();

});

angular.module('quixrWebview').requires.push('e2e-mocks');