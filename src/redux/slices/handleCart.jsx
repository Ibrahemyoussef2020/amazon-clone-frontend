import { createSlice } from "@reduxjs/toolkit";

const strorageProducts = localStorage.getItem('products') !== null ?  JSON.parse(localStorage.getItem('products')) : []
const stroragePurchases = localStorage.getItem('purchases') !== null ?  JSON.parse(localStorage.getItem('purchases')) : []
const productCount = localStorage.getItem('products-count') !== null ? JSON.parse(localStorage.getItem('products-count')):0
const theBill = localStorage.getItem('bill') !== null ? JSON.parse(localStorage.getItem('bill')):0
const theFinalBill = localStorage.getItem('final-bill') !== null ? JSON.parse(localStorage.getItem('final-bill')):0

const initialState = {
    products:strorageProducts,
    purchases:stroragePurchases,
    productCount:productCount,
    bill:theBill,
    finalBill:theFinalBill
}

const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const addProduct = state.products?.find(product => product.id === action.payload.id)

            if(addProduct){ 
                const quantity = +addProduct.quantity + +action.payload.quantity;
                const total = (+addProduct.total + +action.payload.total) - addProduct.deliveryPrice;

                state.productCount = state.productCount + quantity;
                state.bill = state.bill + total;
                state.products = state.products.map(product => product.id === addProduct.id ? {...product,quantity:quantity,total:total} : product)

            }else{
                state.productCount = state.productCount + action.payload.quantity;
                state.bill = state.bill + action.payload.total
                state.products = [...state.products,action.payload]               
            }


            localStorage.setItem('products-count',state.productCount)
            localStorage.setItem('bill',state.bill)
            localStorage.setItem('products',JSON.stringify(state.products.map(product => product)))

        },
        removeFromCart:(state,action)=>{
            const deletedProduct = state.products?.find(product => product.id === action.payload)

            if (deletedProduct && state.products.length) {           

                    state.bill = state.bill - deletedProduct.total
                    state.productCount = state.productCount - deletedProduct.quantity
                    state.products = state.products.filter(product => product.id !== action.payload);
                   
                    localStorage.setItem('products-count',state.productCount)
                    localStorage.setItem('bill',state.bill)
                    localStorage.setItem('products',JSON.stringify(state.products.map(product => product)))
        
            }

        },
        handleProductsQuantity:(state,action)=>{
            const modifiedProduct = state.products.find(product => product.id == action.payload.id)

            if (modifiedProduct) {

                if (modifiedProduct.quantity > +action.payload.value) {
                    
                    const quantityDifference = modifiedProduct.quantity - action.payload.value;
                    const priceDifference = quantityDifference * modifiedProduct.price;

                    state.productCount = state.productCount - quantityDifference;
                    state.bill = state.bill - priceDifference;
                    state.products = state.products.map(product => product.id === action.payload.id ? {...product,quantity:action.payload.value,total:product.total - priceDifference} : product)        
                }
                else if (modifiedProduct.quantity < +action.payload.value){

                    const quantityDifference =  action.payload.value - modifiedProduct.quantity;
                    const priceDifference = quantityDifference * modifiedProduct.price;

                    state.productCount = state.productCount + quantityDifference;
                    state.bill = state.bill + priceDifference;
                    state.products = state.products.map(product => product.id === action.payload.id ? {...product,quantity:action.payload.value,total:product.total + priceDifference} : product)
                }

                localStorage.setItem('products-count',state.productCount)
                localStorage.setItem('bill',state.bill)
                localStorage.setItem('products',JSON.stringify(state.products.map(product => product)))
    
            }

        },
        handleBill:(state,action)=>{
  
            state.finalBill = state.bill
            state.purchases = state.products
            
            localStorage.setItem('final-bill',state.bill)
            localStorage.setItem('purchases',JSON.stringify(state.purchases.map(purchase => purchase)))
        },
        increaseQuantity:(state,action)=>{
            const increasedProduct = state.products.find(product => product.id === action.payload);

            if (increasedProduct) {
             const quantity = increasedProduct.quantity + 1;
             const total = increasedProduct.total + increasedProduct.price;
  
              state.productCount = state.productCount + 1;
              state.bill = state.bill + increasedProduct.price;
              state.products = state.products.map(product => product.id === action.payload ? {...product,quantity:quantity,total:total} : product) 
            }
 
            localStorage.setItem('products-count',state.productCount)
            localStorage.setItem('bill',state.bill)
            localStorage.setItem('products',JSON.stringify(state.products.map(product => product))) 
        },
        decreaseQuantity:(state,action)=>{
           const decreasedProduct = state.products.find(product => product.id === action.payload);

           if (decreasedProduct && decreasedProduct.quantity > 1) {
            const quantity = decreasedProduct.quantity - 1;
            const total = decreasedProduct.total - decreasedProduct.price;
 
             state.productCount = state.productCount - 1;
             state.bill = state.bill - decreasedProduct.price;
             state.products = state.products.map(product => product.id === action.payload ? {...product,quantity:quantity,total:total} : product) 
           }

           localStorage.setItem('products-count',state.productCount)
           localStorage.setItem('bill',state.bill)
           localStorage.setItem('products',JSON.stringify(state.products.map(product => product)))

        },
    }
})

export const {addToCart,removeFromCart,handleProductsQuantity,handleBill,increaseQuantity,decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer