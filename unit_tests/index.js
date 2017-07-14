'use strict';

// Chai
const chai = require('chai');
chai.use(require('chai-as-promised'))
chai.should();

describe('unit test suite', function() {
    require('./order_test'),
    require('./cart_test')
})
