const Coverage = require('./Coverage.js');

class SuperSale extends Coverage {
    constructor(sellIn, price) {
        super('Super Sale', sellIn, price);
    }
    updatePrice() {
        // degrade in price twice as fast as normal Products.
        super.updatePrice(2);
    }
};

module.exports = SuperSale;