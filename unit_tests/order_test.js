'use strict';

// Unit to test
const OrderFactory = require('../order/order');

// Stubs
const PaymentMethods = {
    CC: 'credit card'
};

const Status = {
    PAYED: 'payed'
};

// Fake data
const user = {id: 1, name: 'willy'};
const order_data = {};

// Test
module.exports = describe("#Order", ()=> {

    it("should throw an error if data model is violated", ()=> {
        // Model validation stub
        const OrderModel = () => ( { validate: (data)=> false } );

        // Setting the Order function with the stubs
        const Order = OrderFactory( { PaymentMethods, Status, OrderModel } );

        // Asserting
        ( () => new Order(user, order_data) ).should.throw(`wrong data for order`);
    })

    it("should return a correct payment object", (done)=> {
        // Model validation stub
        const OrderModel = () => ( { validate: (data)=> true } );

        // Setting the Order function with the stubs
        const Order = OrderFactory( { PaymentMethods, Status, OrderModel } );
        const order = new Order(user, order_data);

        // Asserting
        order.pay(10)
        .should.eventually.deep.equal( {amount: 10, status: 'payed', method: 'credit card'} )
        .notify(done);
    })

})
