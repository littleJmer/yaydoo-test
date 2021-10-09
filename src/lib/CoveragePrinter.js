class CoveragePrinter {

    data = [];

    constructor(data = []) {
        this.data = data;
    }

    set coverages(coverages) {
        this.data = Array.isArray(coverages) ? coverages : [];
    }

    get coverages() {
        return this.data;
    }

    rawText() {
        let str = `name, sellIn, price\n`;
        for (let coverage of this.data) {
            const { name, sellIn, price } = coverage;
            str += `${name}, ${sellIn}, ${price}\n`;
        }
        return str;
    }

    array() {
        let result = []
        for (let coverage of this.data) {
            const { name, sellIn, price } = coverage;
            result.push({ name, sellIn, price });
        }
        return result;
    }
};

module.exports = CoveragePrinter;