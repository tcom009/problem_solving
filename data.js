export const taxExckudedProducts ={
    BOOKS: "BOOKS",
    FOOD: "FOOD",
    MEDICAL: "MEDICAL",
}
export const taxRates ={
    importedGoodsTax:0.05, 
    basicTax: 0.1
}

export const input1 = [
  {
    quantity: 2,
    item: "book",

    basicTaxApplicable: false,
    isImported: false,
    price: 12.49,
  },
  {
    quantity: 1,
    item: "music CD",
    basicTaxApplicable: true,
    isImported: false,
    price: 14.99,
  },
  {
    quantity: 1,
    item: "chocolate bar",
    basicTaxApplicable: false,
    isImported: false,
    price: 0.85,
  },
];

export const input2 = [
  {
    quantity: 1,
    item: "imported box of chocolates",
    basicTaxApplicable: false,
    isImported: true,
    price: 10.0,
  },
  {
    quantity: 1,
    item: "imported bottle of perfume",
    basicTaxApplicable: true,
    isImported: true,
    price: 47.5,
  },
];

export const input3 = [
  {
    quantity: 1,
    item: "imported bottle of perfume",
    basicTaxApplicable: true,
    isImported: true,
    price: 27.99,
  },
  {
    quantity: 1,
    item: "bottle of perfume",
    basicTaxApplicable: true,
    isImported: false,
    price: 18.99,
  },
  {
    quantity: 1,
    item: "packet of headache pills",
    basicTaxApplicable: false,
    isImported: false,
    price: 9.75
  },
  {
    quantity: 3,
    item: "imported box of chocolate",
    basicTaxApplicable: false,
    isImported:true,
    price: 11.25
  }
];

export const inputs = [input1, input2, input3]