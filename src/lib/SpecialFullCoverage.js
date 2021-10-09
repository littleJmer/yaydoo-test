const Coverage = require('./Coverage.js');

class SpecialFullCoverage extends Coverage {
    constructor(sellIn, price) {
        super('Special Full Coverage', sellIn, price);
    }
    updatePrice() {
        this.sellIn--;
        // price drops to 0 when no more days left
        if (this.sellIn < 0) {
            this.price = 0;
            return;
        }
        if (this.price < 50) {
            // increases by 2 when there are 10 days or less
            if (this.sellIn >= 6 && this.sellIn <= 10) this.price += 2;
            // increases by 3 when there are 5 days or less
            else if (this.sellIn <= 5) this.price += 3;
            // increases by 1 others cases
            else this.price++
        }
        if (this.price > 50) this.price = 50;
    }
};

module.exports = SpecialFullCoverage;