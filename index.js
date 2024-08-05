import { taxExckudedProducts, taxRates, inputs } from "./data.js";


const calculateBasicTax = (product)=>{
    if (product.basicTaxApplicable){
        const basicTax = product.price*taxRates.basicTax
        product["basicTax"] = basicTax
        return product
    }else {
        product["basicTax"]= 0.0
        return product
    }
}

const calculateImportedTax = (product) =>{
    if(product.isImported){
        const importationTax = product.price*taxRates.importedGoodsTax
        product["importationTax"] = importationTax
        return product
    }else {
        product["importationTax"] = 0.0
        return product
    }
} 

const getTaxes = (products) =>{
    return products.map((product) =>{
        const basicTax = calculateBasicTax(product)
        const importationTax = calculateImportedTax(basicTax)
        return importationTax 
    })
    
}

inputs.forEach((products)=>{
    console.log(getTaxes(products))
})