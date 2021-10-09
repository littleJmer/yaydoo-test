const Coverage = require('./Coverage.js');

class MegaCoverage extends Coverage {
    constructor(sellIn, price) {
        super('Mega Coverage', sellIn, price, { priceLimit: 80 });
    }
    updatePrice() {
        // being a legendary product, never has to be sold or decreases in price
        return null;
    }
};

module.exports = MegaCoverage;