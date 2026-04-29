import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import themeReducer from "./features/themeSlice"
import cartReducer from './features/cartSlice'

export const store = configureStore(
    {
        // root reducer function - it holds multiple slices and tracking the state updates
        reducer: {
            counter: counterReducer,
            theme: themeReducer,
            cart: cartReducer
        }
    }
)