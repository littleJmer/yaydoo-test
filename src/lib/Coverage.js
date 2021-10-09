const Product = require('./Product.js');

const defaultProps = {
    priceLimit: 50
}

class Coverage extends Product {

    props = {}

    constructor(name, sellIn, price, customProps = {}) {
        let props = {
            ...defaultProps,
            ...customProps
        };

        if (price > props.priceLimit) price = props.priceLimit;
        if (price < 0) price = 0;

        super(name, sellIn, price);
        this.props = props;
    }

    updatePrice(degrade = 1) {
        this.sellIn--;
        // The price of a product is never negative
        // Once the sell by date has passed, price degrades twice as fast.
        if (this.price > 0) {
            this.price -= degrade * (this.sellIn < 0 ? 2 : 1);
        }

        if (this.price < 0) this.price = 0;
    }

};

module.exports = Coverage;