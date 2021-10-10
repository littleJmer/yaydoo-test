const {
    MediumCoverage,
    FullCoverage,
    LowCoverage,
    MegaCoverage,
    SpecialFullCoverage,
    SuperSale,
    CarInsurance,
    CoveragePrinter
} = require('./lib');

const coveragesAtDayZero = [
    new MediumCoverage(10, 20),
    new FullCoverage(2, 0),
    new LowCoverage(5, 7),
    new MegaCoverage(0, 80),
    new MegaCoverage(-1, 80),
    new SpecialFullCoverage(15, 20),
    new SpecialFullCoverage(10, 49),
    new SpecialFullCoverage(5, 49),
    new SuperSale(3, 6),
];

const carInsurance = new CarInsurance(coveragesAtDayZero);
const coveragePrinter = new CoveragePrinter(carInsurance.coverages);

console.log(`OMGHAI!`);
console.log(`-------- day 0 --------`);
console.log(coveragePrinter.rawText());

for (let i = 1; i <= 30; i += 1) {
    console.log(`-------- day ${i} --------`);
    carInsurance.updatePrice();
    coveragePrinter.coverages = carInsurance.coverages;
    console.log(coveragePrinter.rawText());
}