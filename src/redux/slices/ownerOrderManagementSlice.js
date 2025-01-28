import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantId : null,
    activeOrders : [],
}

const ownerOrderManagementSlice = createSlice({
    name : "ownerOrderManagement",
    initialState,
    reducers : {
        setRestaurantIdForOwnerOrderManagement : (state , action) => {
            state.restaurantId = action.payload;
        },
        setActiveOrders : (state , action) => {
            state.activeOrders = action.payload;
        }
    }
})

export const { 
    setRestaurantIdForOwnerOrderManagement,
    setActiveOrders
} = ownerOrderManagementSlice.actions;
export default ownerOrderManagementSlice.reducer;