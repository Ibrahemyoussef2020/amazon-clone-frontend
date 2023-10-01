import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

        },
        removeFromCart:(state,action)=>{

        },
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer