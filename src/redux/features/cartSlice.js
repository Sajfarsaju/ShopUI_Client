import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {items:[]},

        reducers:{
            addToCart : (state,action) => {
                console.log(action);
                
                state.items.push(action.payload)
                
            },
            removeCart : (state,action) => {
                // find the id using filter and remove from the array
            }
        }
    }
)

export const {addToCart, removeCart} = cartSlice.actions
export default cartSlice.reducer