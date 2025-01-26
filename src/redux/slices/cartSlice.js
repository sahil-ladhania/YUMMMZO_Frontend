import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantId : null,
    cartItems : [],
    totalItems : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setRestaurantId : (state , action) => {
            state.restaurantId = action.payload;
        },
        setAddToCart : (state , action) => {
            // Logic to Add the Item to Cart
            state.cartItems = [
                ...state.cartItems,
                action.payload
            ];
        },
        setIncrementItem: (state, action) => {
            const { itemId, selectedQuantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.itemDetails.itemId === itemId);
            if (existingItem) {
                existingItem.selectedQuantity = selectedQuantity + 1;
            }
        },
        setDecrementItem: (state, action) => {
            const { itemId, selectedQuantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.itemDetails.itemId === itemId);
            if (existingItem && existingItem.selectedQuantity > 1) {
                existingItem.selectedQuantity = selectedQuantity - 1;
            }
        },
        setClearCart : (state , action) => {
            // Logic to Increment the Item
        },
        setTotalItems : (state , action) => {
            // Logic to Set Count of Total Items in the Cart
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