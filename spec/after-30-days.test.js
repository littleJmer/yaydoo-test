const expect = require('chai').expect;

const {
	Product,
	Coverage,
	LowCoverage,
    MediumCoverage
} = require('../src/lib');

function updateProductNtimes(days = 0, product) {
	for (let i = 1; i <= days; i++) {
		product.updatePrice();
	}
}

describe("Successful Cases", function () {

    describe("Coverage", function () {
        it("should be instance of Product", function () {
            let instance = new Coverage();
            expect(instance).to.be.instanceOf(Product);
        });
    });

    describe("LowCoverage", function () {
        let instance = new LowCoverage(5, 25);
        it("should be instance of Coverage", function () {
            expect(instance).to.be.instanceOf(Coverage);
        });
        it("should decrease sellIn and price, during 5 days", function () {
            updateProductNtimes(5, instance);
            expect(instance.sellIn).to.be.equal(0);
            expect(instance.price).to.be.equal(20);
        });
        it("if sellIn droped 0, price decreases twice as fast", function () {
            updateProductNtimes(2, instance);
            expect(instance.sellIn).to.be.equal(-2);
            expect(instance.price).to.be.equal(16);
        });
        it("price can not be less than 0", function () {
            updateProductNtimes(9, instance);
            expect(instance.sellIn).to.be.equal(-11);
            expect(instance.price).to.be.equal(0);
        });
    });

    describe("MediumCoverage", function () {
		let instance = new MediumCoverage(5, 25);
		it("should be instance of Coverage", function () {
			expect(instance).to.be.instanceOf(Coverage);
		});
		it("should decrease sellIn and price, during 5 days", function () {
			updateProductNtimes(5, instance);
			expect(instance.sellIn).to.be.equal(0);
			expect(instance.price).to.be.equal(20);
		});
		it("if sellIn droped 0, price decreases twice as fast", function () {
			updateProductNtimes(2, instance);
			expect(instance.sellIn).to.be.equal(-2);
			expect(instance.price).to.be.equal(16);
		});
		it("price can not be less than 0", function () {
			updateProductNtimes(9, instance);
			expect(instance.sellIn).to.be.equal(-11);
			expect(instance.price).to.be.equal(0);
		});
	});

});