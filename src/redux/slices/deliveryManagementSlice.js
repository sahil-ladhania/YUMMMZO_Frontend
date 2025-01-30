import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    partnerId : null,
    activeOrderDetails : {},
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
        setActiveOrderDetails : (state , action) => {
            state.activeOrderDetails = action.payload;
        },
        setDeliveriesDoneList : (state , action) => {
            state.deliveriesDoneList = action.payload;
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
    setActiveOrderDetails,
    setDeliveriesDoneList,
    setIsLoading,
    setError
} = deliveryManagementSlice.actions;
export default deliveryManagementSlice.reducer;