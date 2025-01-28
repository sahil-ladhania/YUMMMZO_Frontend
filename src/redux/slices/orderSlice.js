import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    userId : null,
    restaurantId : null,
    orderItems : [],
    totalPrice : 0,
    userAddress : "",
    restaurantAddress : "",
    orderStatus : "PENDING",
    orderPlacedTime : "",
    orderStep : 1,
    savedAddresses : [],
    selectedAddress : '',
    isOrderPlaced : false,
    isLoading : false,
    error : ''
}

const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        setUserIdForOrder : (state , action) => {
            state.userId = action.payload;
        },
        setRestaurantIdForOrder : (state , action) => {
            state.restaurantId = action.payload;
        },
        setOrderItems : (state , action) => {
            state.orderItems = action.payload;
        },
        setTotalPrice : (state , action) => {
            state.totalPrice = action.payload;
        },
        setUserAddress : (state , action) => {
            const userDetails = action.payload;
            state.userAddress = `${userDetails.buildingNumber}, ${userDetails.floorNumber}, ${userDetails.apartment}, ${userDetails.area}, ${userDetails.city}`;
        },
        setRestaurantAddress : (state , action) => {
            const restaurantDetails = action.payload;
            state.restaurantAddress = `${restaurantDetails.buildingNumber}, ${restaurantDetails.floorNumber}, ${restaurantDetails.area}, ${restaurantDetails.city}`;
        },
        setOrderPlacedTime : (state , action) => {
            state.orderPlacedTime = action.payload;
        },
        setOrderStep : (state , action) => {
            state.orderStep = action.payload;
        },
        setSavedAddresses : (state , action) => {
            state.savedAddresses = action.payload;
        },
        setSelectedAddress : (state , action) => {
            state.selectedAddress = action.payload;
        },
        setIsOrderPlaced : (state , action) => {
            state.isOrderPlaced = action.payload;
        },
        setIsLoading : (state , action) => {
            state.isLoading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        }
    }
})

export const { 
    setUserIdForOrder,
    setRestaurantIdForOrder,
    setOrderItems,
    setUserAddress,
    setRestaurantAddress,
    setTotalPrice,
    setOrderStep,
    setOrderPlacedTime,
    setSavedAddresses,
    setSelectedAddress,
    setIsOrderPlaced,
    setIsLoading,
    setError
} = orderSlice.actions;
export default orderSlice.reducer;