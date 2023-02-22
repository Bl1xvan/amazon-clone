import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {cart: [], total: 0, user: null},
    reducers: {
        addToCart(state, action){
            return{
                ...state, cart: [...state.cart, action.item]
            }
        },
        getBasketTotal(state, action){
            state.total = state.cart.reduce((amount, item) => item.price + amount, 0)
        }
    }
})

export const actions = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer
});

export default store;