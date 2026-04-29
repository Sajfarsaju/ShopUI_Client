import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice(
    {
        // Naming this slice as "counter"
        name: "counter",

        // Defining the state for counter
        initialState: { val: 0 },

        // reducers - this object holds the updater functions(to update the state) / logics
        reducers: {
            increment: (state) => { 
                
                state.val += 1
                console.log(state.val);
             },
            decrement: (state) => { state.val -= 1 },
            reset: (state) => { state.val = 0 }
        }
    }
)

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer