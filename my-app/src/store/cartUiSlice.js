
import { createSlice } from "@reduxjs/toolkit";


const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {
        cartIsVisible: false
    },
    // mutable changes are allowed below due to redux toolkit 
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const selectCartIcon = (state) => {
    return state.cartUi.cartIsVisible;
}

export const { toggle } = cartUiSlice.actions;

export default cartUiSlice.reducer;
