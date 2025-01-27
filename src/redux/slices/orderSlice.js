import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    orderStep : 1,
    savedAddresses : [],
    selectedAddress : '',
    isLoading : false,
    error : ''
}

const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        setOrderStep : (state , action) => {
            state.orderStep = action.payload;
        },
        setSavedAddresses : (state , action) => {
            state.savedAddresses = action.payload;
        },
        setSelectedAddress : (state , action) => {
            state.selectedAddress = action.payload;
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
    setOrderStep,
    setSavedAddresses,
    setSelectedAddress,
    setIsLoading,
    setError
} = orderSlice.actions;
export default orderSlice.reducer;