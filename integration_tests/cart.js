'use strict';

module.exports = describe('#Cart', function() {

    it('should add a cherry to the cart', function(done) {

        client.click('#cherry')
        .execute(function() {
            return myApp.cart.items.get('cherry').qty;
        })
        .then( (res)=> {
            res.value.should.be.equal(1);
            done();
        })
    });

    it('should checkout properly', function(done) {
        this.timeout(2300);
        client.click('#checkout')
        .pause(2000)
        .execute(function() {
            return myApp.payment;
        })
        .then( (res)=> {
            res.value.should.be.deep.equal( {amount: 1, status: 'payed', method: 'credit card'} )
            done();
        })
    })

});
