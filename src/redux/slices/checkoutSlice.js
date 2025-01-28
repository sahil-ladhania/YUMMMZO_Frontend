import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantIdForCheckout : null,
    restaurantName : '',
    restaurantImage : '',
    itemsToOrder : [],
    itemsTotal : 0,
    deliveryFee : 50,
    platformFee : 5,
    gst : 0,
    toPay : 0
}

const checkoutSlice = createSlice({
    name : "checkout",
    initialState,
    reducers : {
        setRestaurantIdForCheckout : (state , action) => {
            // Logic to set Restaurant ID
            state.restaurantIdForCheckout = action.payload;
        },
        setRestaurantNameForCheckout : (state , action) => {
            // Logic to set Restaurant Name
            state.restaurantName = action.payload;
        },
        setRestaurantImageForCheckout : (state , action) => {
            // Logic to set Restaurant Image
            state.restaurantImage = action.payload;
        },
        setItemsToOrder : (state , action) => {
            state.itemsToOrder = action.payload;
        },
        setItemsTotal : (state , action) => {
            // Logic to Calculate the Total of Cart Items
            state.itemsTotal = action.payload;
        },
        setGST : (state , action) => {
            // Logic to Calculate the GST based on the Items Total
            state.gst = action.payload;
        },
        setToPay : (state , action) => {
            // Logic to Calculate the Total Amount that user will Pay
            state.toPay = action.payload;
        },
    }
})


export const { 
    setRestaurantIdForCheckout,
    setRestaurantNameForCheckout,
    setRestaurantImageForCheckout,
    setItemsTotal,
    setItemsToOrder,
    setGST,
    setToPay
} = checkoutSlice.actions;
export default checkoutSlice.reducer;