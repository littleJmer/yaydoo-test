const Coverage = require('./Coverage.js');

class FullCoverage extends Coverage {
    constructor(sellIn, price) {
        super('Full Coverage', sellIn, price);
    }
    updatePrice() {
        this.sellIn--;
        // actually increases in price the older it gets.
        // price of a product is never more than 50.
        if (this.price < 50) {
            this.price += 1 * (this.sellIn < 0 ? 2 : 1);
        }

        if (this.price > 50) this.price = 50;
    }
};

module.exports = FullCoverage;