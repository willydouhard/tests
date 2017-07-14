'use strict';

function Order( { PaymentMethods, Status, OrderModel }, user, data) {
    this.PaymentMethods = PaymentMethods;
    this.Status = Status;

    this.data = data;
    this.data.user = user;
    this.model = OrderModel();

    if(!this.model.validate(this.data)) throw new Error(`wrong data for order`);
}

Order.prototype.pay = function (amount) {
    return new Promise( (resolve, reject) => {
        this.data.payment = {amount};
        this.data.payment.status = this.Status.PAYED;
        this.data.payment.method = this.PaymentMethods.CC;

        setTimeout( () => resolve(this.data.payment), 1000);
    })
}

function OrderFactory(deps) {
    return Order.bind(null, deps);
}

module.exports = OrderFactory;
