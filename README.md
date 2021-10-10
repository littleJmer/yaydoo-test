# Software Engineer Test

Hi Yaydoo! here is my solution for this test, i went for create a Coverage Class which extends from 
Product Class, on this way we can create a difirent product with the same attributes (name, price and sellIn) maybe a "Membership" product. Then i created a class for every different coverages (Low, Medium, Full, SpecialFull, Mega, and so on) with this approach we can add a new coverage-product without modify the current coverages.

# Hierarchy class

```
Product
├── Coverage
│    ├── LowCoverage
│    ├── MediumCoverage
│    ├── FullCoverage
│    ├── MegaCoverage
│    ├── SpecialFullCoverage
│    └── SuperSale
├── ***Membership***
│    ├── MembershipType1
│    ├── MembershipType2
```

# Commands

- `npm run test`, run the test suite and display the coverage report
- `npm run after-30-days`, display an output similar to `products_after_30_days.txt`
