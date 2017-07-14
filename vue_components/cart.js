'use strict';

const Cart = {
    props: ['user'],
    render() {},
    data() {
        return {
            items: new Map()
        }
    },
    methods: {

        add(item) {
            if( this.items.has( item.name) ) this.items.get(item.name).qty += item.qty;
            else this.items.set(item.name, item);
        },

        sum() {
            let sum = 0;
            for(let entry of this.items) {
                const item = entry[1];
                sum += item.qty * item.u_price;
            }
            return sum;
        },

        checkout() {
            return new Promise( (resolve, reject) => {
                if(!this.user) return reject('no user provided');
                const order = new this.Order(this.user, this.items);
                order.pay(this.sum())
                .then( (result) => resolve(result) )
            })

        }
    }
}

module.exports = Cart;
