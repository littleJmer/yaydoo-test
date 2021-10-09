class CarInsurance {
    constructor(coverages = []) {
        this.coverages = coverages;
    }
    updatePrice() {
        for (let coverage of this.coverages) {
            coverage.updatePrice();
        }
    }
};

module.exports = CarInsurance;