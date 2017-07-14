'use strict';

const Vue = require('vue');
const Cart = require('../vue_components/cart');


const Order = function(user, items) {
    this.user = user;
    this.items = items;
}

Order.prototype.pay = function(amount) {
    return Promise.resolve(amount);
}

// helper function that mounts & returns the comp with dependencies injected
function get_mounted_cmp (props) {
    const Ctor = Vue.extend(Cart);
    const instance = new Ctor({ propsData: props }).$mount();
    instance.Order = Order;
    return instance;
}

module.exports = describe('Cart', () => {

    it('should add item properly', ()=> {
        const cart = get_mounted_cmp({});
        cart.add( {name: 'banana', qty: 2, u_price: 10} )
        cart.items.size.should.be.equal(1);
    })

    it('should get the correct sum', ()=> {
        const cart = get_mounted_cmp({});
        cart.add( {name: 'banana', qty: 2, u_price: 10} );
        cart.add( {name: 'apple', qty: 3, u_price: 5} );
        cart.sum().should.be.equal(35);
    })

    it('should throw if we checkout with no user', ()=> {
        const cart = get_mounted_cmp({});
        ( cart.checkout() ).should.be.rejectedWith('no user provided');
    })

    it('should pay without errors', (done)=> {
        const cart = get_mounted_cmp({ user: {name: 'willy' } });

        cart.add( {name: 'banana', qty: 2, u_price: 10} );
        cart.add( {name: 'apple', qty: 3, u_price: 5} );

        cart.checkout()
        .should.eventually.be.equal(35)
        .notify(done);
    })

})
