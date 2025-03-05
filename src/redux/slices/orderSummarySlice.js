import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    userId : null,
    orderId : null,
    restaurantId : null,
    partnerId : null,
    restaurantName : "",
    partnerName : "",
    orderDate : null,
    totalPrice : 0,
    orderStatus : "",
    userAddress : "",
    restaurantAddress : "",
    orderItems : [],
    isLoading : false,
    error : null
}

const orderSummarySlice = createSlice({
    initialState,
    name : "orderSummary",
    reducers : {
        setUserId : (state , action) => {
            state.userId = action.payload;
        },
        setOrderId : (state , action) => {
            state.orderId = action.payload;
        },
        setRestaurantId : (state , action) => {
            state.restaurantId = action.payload;
        },
        setPartnerId : (state , action) => {
            state.partnerId = action.payload;
        },
        setRestaurantName : (state , action) => {
            state.restaurantName = action.payload;
        },
        setPartnerName : (state , action) => {
            state.partnerName = action.payload;
        },
        setOrderDate : (state , action) => {
            state.orderDate = action.payload;
        },
        setTotalPrice : (state , action) => {
            state.totalPrice = action.payload;
        },
        setOrderStatus : (state , action) => {
            state.orderStatus = action.payload;
        },
        setUserAddress : (state , action) => {
            state.userAddress = action.payload;
        },
        setRestaurantAddress : (state , action) => {
            state.restaurantAddress = action.payload;
        },
        setOrderedItems : (state , action) => {
            state.orderItems = action.payload;
        },
        setIsLoading : (state , action) => {
            state.isLoading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        },
    }
})

export const { 
    setUserId,
    setOrderId,
    setRestaurantId,
    setPartnerId,
    setRestaurantName,
    setPartnerName,
    setOrderDate,
    setTotalPrice,
    setOrderStatus,
    setUserAddress,
    setRestaurantAddress,
    setOrderedItems,
    setIsLoading,
    setError
} = orderSummarySlice.actions;
export default orderSummarySlice.reducer;