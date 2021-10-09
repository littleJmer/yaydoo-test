const Coverage = require('./Coverage.js');

class LowCoverage extends Coverage {
    constructor(sellIn, price) {
        super('Low Coverage', sellIn, price);
    }
};

module.exports = LowCoverage;