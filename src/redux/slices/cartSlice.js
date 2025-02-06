import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantIdForCart : null,
    cartItems : [],
    totalItems : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setRestaurantId : (state , action) => {
            state.restaurantIdForCart = action.payload;
        },
        setAddToCart : (state , action) => {
            state.cartItems = [
                ...state.cartItems,
                action.payload
            ];
            state.totalItems = state.cartItems.reduce((total, item) => total + item.selectedQuantity, 0);
        },
        setIncrementItem: (state, action) => {
            const { itemId, selectedQuantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.itemDetails.itemId === itemId);
            if (existingItem) {
                existingItem.selectedQuantity = selectedQuantity + 1;
            }
            state.totalItems = state.cartItems.reduce((total, item) => total + item.selectedQuantity, 0);
        },
        setDecrementItem: (state, action) => {
            const { itemId, selectedQuantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.itemDetails.itemId === itemId);
            if (existingItem && existingItem.selectedQuantity > 1) {
                existingItem.selectedQuantity = selectedQuantity - 1;
            }
            state.totalItems = state.cartItems.reduce((total, item) => total + item.selectedQuantity, 0);
        },
        setClearCart : (state) => {
            state.cartItems = [];
        },
        setTotalItems : (state) => {
            state.totalItems = state.cartItems.reduce((total, item) => total + item.selectedQuantity, 0);
        }
    }
})


export const { 
    setRestaurantId,
    setAddToCart,
    setTotalItems,
    setIncrementItem,
    setDecrementItem,
    setClearCart
} = cartSlice.actions;
export default cartSlice.reducer;