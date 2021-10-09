const Coverage = require('./Coverage.js');

class MediumCoverage extends Coverage {
    constructor(sellIn, price) {
        super('Medium Coverage', sellIn, price);
    }
};

module.exports = MediumCoverage;