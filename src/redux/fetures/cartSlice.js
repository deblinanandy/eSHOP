import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
};

const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);
            
            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                state.carts = [...state.carts, temp];
            }
        },
        removeToCart: (state, action) => {
            const data = state.carts.filter(element => element.id !== action.payload);
            state.carts = data;
        },
        removeItems: (state, action) => {
            const itemIndex_dec = state.carts.findIndex(item => item.id === action.payload.id);
            if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qty >= 1) {
                state.carts[itemIndex_dec].qty -= 1;
            }
        }
    }
});

export const { addToCart, removeToCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
