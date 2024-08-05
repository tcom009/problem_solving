const taxExckudedProducts ={
    BOOKS: "BOOKS",
    FOOD: "FOOD",
    MEDICAL: "MEDICAL"
    NOT_APLICABLE: "NOT_APLICABLE"
}
const taxRates ={
    importedGoodsTax:0.05, 
    basicTax: 0.1
}

const input1 = [
  {
    quantity: 2,
    item: "book",
    isImported: false,
    price: 12.49,
  },
  {
    quantity: 1,
    item: "music CD",
    isImported: false,
    price: 14.99,
  },
  {
    quantity: 1,
    item: "chocolate bar",
    isImported: false,
    price: 0.85,
  },
];

const input2 = [
  {
    quantity: 1,
    item: "imported box of chocolates",
    isImported: true,
    price: 10.0,
  },
  {
    quantity: 1,
    item: "imported bottle of perfume",
    isImported: true,
    price: 47.5,
  },
];

const input3 = [
  {
    quantity: 1,
    item: "imported bottle of perfume",
    isImported: true,
    price: 27.99,
  },
  {
    quantity: 1,
    item: "bottle of perfume",
    isImported: false,
    price: 18.99,
  },
  {
    quantity: 1,
    item: "packet of headache pills",
    isImported: false,
    price: 9.75
  },
  {
    quantity: 3,
    item: "imported box of chocolate",
    isImported:true,
    price: 11.25
  }
];

// #### Input 1:
// ```
// 2 book at 12.49
// 1 music CD at 14.99
// 1 chocolate bar at 0.85
// ```

// #### Input 2:

// ```
// 1 imported box of chocolates at 10.00
// 1 imported bottle of perfume at 47.50
// ```
// #### Input 3:
// ```
// 1 imported bottle of perfume at 27.99
// 1 bottle of perfume at 18.99
// 1 packet of headache pills at 9.75
// 3 imported boxes of chocolates

// Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and
// medical products that are exempt. Import duty is an additional sales tax applicable on all
// imported goods at a rate of 5%, with no exemptions.
