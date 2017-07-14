'use strict';

// Imports
const PaymentMethods = require('./consts/payment_methods');
const Status = require('./consts/status');

const OrderModel = require('./order/order_model');
const OrderFactory = require('./order/order');

// Inversion of control
const Order = OrderFactory( { PaymentMethods, Status, OrderModel } );

// Use
const user = {id: 1, name: 'willy'};
const order_data = {};

const order = new Order(user, order_data);

order.pay(10)
.then( payment => console.log(payment) )
.catch( err => console.error('err', err) );
