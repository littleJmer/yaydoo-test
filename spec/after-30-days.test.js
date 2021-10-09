const expect = require('chai').expect;

const {
	Product,
	Coverage,
	LowCoverage,
    MediumCoverage,
    MegaCoverage,
    SpecialFullCoverage
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

    describe("MegaCoverage", function () {
		let instance = new MegaCoverage(5, 80);
		it("should be instance of Coverage", function () {
			expect(instance).to.be.instanceOf(Coverage);
		});
		it("price can be higher than 50", function () {
			expect(instance.price).to.be.equal(80);
		});
		it("never has to be decreases in price or sellIn", function () {
			updateProductNtimes(9, instance);
			expect(instance.sellIn).to.be.equal(5);
			expect(instance.price).to.be.equal(80);
		});
	});

    describe("SpecialFullCoverage", function () {
		let instance = new SpecialFullCoverage(16, 25);
		it("should be instance of Coverage", function () {
			expect(instance).to.be.instanceOf(Coverage);
		});
		it("should increase price, and decreases sellIn during 5 days", function () {
			updateProductNtimes(5, instance);
			expect(instance.sellIn).to.be.equal(11);
			expect(instance.price).to.be.equal(30);
		});
		it("should increase price by 2 when there are 10 days or less", function () {
			updateProductNtimes(5, instance);
			expect(instance.sellIn).to.be.equal(6);
			expect(instance.price).to.be.equal(40);
		});
		it("should increase price by 3 when there are 5 days or less", function () {
			updateProductNtimes(2, instance);
			expect(instance.sellIn).to.be.equal(4);
			expect(instance.price).to.be.equal(46);
		});
		it("price can not be higher than 50", function () {
			updateProductNtimes(4, instance);
			expect(instance.sellIn).to.be.equal(0);
			expect(instance.price).to.be.equal(50);
		});
		it("should price drops to 0 when no more days left", function () {
			updateProductNtimes(1, instance);
			expect(instance.sellIn).to.be.equal(-1);
			expect(instance.price).to.be.equal(0);
		});
	});

});