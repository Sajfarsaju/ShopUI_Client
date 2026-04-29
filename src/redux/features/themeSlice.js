import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice(
    {
        name: "theme",
        initialState: { isLight: true },

        // name : "todo"
        // initialState : {todoItems: []}

        reducers: {
            toggleTheme: (state) => {
                console.log("Reached");
                
                // state.isLight = state.isLight ? false : true

                console.log("going to change to:", !state.isLight);
                
                state.isLight = !state.isLight
             },

            //  addItem : () => { state.}
            // removeItem: () => 
            // editItem : () = >
        }
    }
)

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer