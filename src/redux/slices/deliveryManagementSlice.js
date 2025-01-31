import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    partnerId : null,
    activeOrderId : null,
    activeOrderDetails : {},
    deliveryDetailsToUpdate : {},
    updatedDeliveryStatus : "",
    deliveriesDoneList : [],
    isLoading : false,
    error : null
}

const deliveryManagementSlice = createSlice({
    name : "deliveryManagement",
    initialState,
    reducers : {
        setPartnerId : (state , action) => {
            state.partnerId = action.payload;
        },
        setActiveOrderId : (state , action) => {
            state.activeOrderId = action.payload;
        },
        setActiveOrderDetails : (state , action) => {
            state.activeOrderDetails = action.payload;
        },
        setDeliveriesDoneList : (state , action) => {
            state.deliveriesDoneList = action.payload;
        },
        setDeliveryDetailsToUpdate : (state , action) => {
            state.deliveryDetailsToUpdate = action.payload;
        },
        setUpdatedDeliveryStatus : (state , action) => {
            state.updatedDeliveryStatus = action.payload;
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
    setPartnerId,
    setActiveOrderId,
    setActiveOrderDetails,
    setDeliveryDetailsToUpdate,
    setUpdatedDeliveryStatus,
    setDeliveriesDoneList,
    setIsLoading,
    setError
} = deliveryManagementSlice.actions;
export default deliveryManagementSlice.reducer;