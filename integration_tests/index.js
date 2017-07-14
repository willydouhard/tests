'use strict';

global.client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = client.transferPromiseness;

describe('my app', function() {

    before(function () {
        return client.init().url('http://localhost:8000');
    });

    after(function () {
        return client.end();
    });

    require('./cart')



})
