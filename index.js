import { taxRates, inputs } from "./data.js";

const roundValue = (value) => Math.ceil(value*20) /20
const calculateBasicTax = (product)=>{
    if (product.basicTaxApplicable){
        const basicTax = roundValue(product.price*taxRates.basicTax)
        
        product["basicTax"] = basicTax
        return product
    }else {
        product["basicTax"]= 0.0
        return product
    }
}

const calculateImportedTax = (product) =>{
    if(product.isImported){
        const importationTax = roundValue(product.price*taxRates.importedGoodsTax)
        product["importationTax"] = importationTax
        return product
    }else {
        product["importationTax"] = 0.0
        return product
    }
} 

const getTaxesPerProducts = (products) =>{
    return products.map((product) =>{
        const basicTax = calculateBasicTax(product)
        const importationTax = calculateImportedTax(basicTax)
        importationTax["totalTax"]= importationTax.basicTax + importationTax.importationTax
        importationTax["itemTotal"]= (importationTax.totalTax + importationTax.price)*importationTax.quantity 
        return importationTax 
    })
}

const getSalesTaxes = (products) =>{
    const saleTax = products.reduce((accumulator, currentProduct)=>{
       return  accumulator += currentProduct.totalTax
    }, 0)
    return saleTax
}


const results = inputs.map((sale)=>{
    const taxedProducts = getTaxesPerProducts(sale)
    const saleTaxes = getSalesTaxes(taxedProducts)
    const grandTotal =  taxedProducts.reduce((accumulator, product) => accumulator += product.itemTotal, 0)
    const result = { items: taxedProducts, saleTaxes, grandTotal}
    return result
})


results.forEach((result)=>{
    result.items.forEach((item) => console.log(`${item.quantity} ${item.item} ${item.itemTotal.toFixed(2)}`))
    console.log(`Sales taxes: ${result.saleTaxes.toFixed(2)}`)
    console.log(`Total: ${result.grandTotal.toFixed(2)}`)
} )