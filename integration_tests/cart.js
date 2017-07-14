'use strict';

module.exports = describe('#Cart', function() {

    it('should add a cherry to the cart', function(done) {

        client.click('#cherry')
        .execute(function() {
            // browser context - you may not access client or console
            return myApp.cart.items.get('cherry').qty;
        })
        .then( (res)=> {
            res.value.should.be.equal(1);
            done();
        })
    });

});
