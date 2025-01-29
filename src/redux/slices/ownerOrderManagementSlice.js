import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantDetails : [],
    activeOrders : [],
    selectedOrderDetails : {},
    orderDetailsToUpdate : {},
    updatedOrderDetails : {},
    loading : false,
    error : null
}

const ownerOrderManagementSlice = createSlice({
    name : "ownerOrderManagement",
    initialState,
    reducers : {
        setRestaurantDetailsForOwner : (state , action) => {
            state.restaurantDetails = action.payload;
        },
        setActiveOrders : (state , action) => {
            state.activeOrders = action.payload;
        },
        setSelectedOrderDetails : (state , action) => {
            state.selectedOrderDetails = action.payload;
        },
        clearSelectedOrderDetails : (state , action) => {
            state.selectedOrderDetails = {};
        },
        setOrderDetailsToUpdate : (state , action) => {
            state.orderDetailsToUpdate = action.payload;
        },
        setUpdatedOrderDetails : (state , action) => {
            state.updatedOrderDetails = action.payload;
        },
        updateOrderStatus : (state , action) => {
            const { orderId, status } = action.payload;
            state.activeOrders = state.activeOrders.map((order) =>
                order.orderId === orderId ? { ...order, orderStatus: status } : order
            );
        },
        setLoading : (state , action) => {
            state.loading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        }
    }
})

export const { 
    setActiveOrders,
    setRestaurantDetailsForOwner,
    setSelectedOrderDetails,
    clearSelectedOrderDetails,
    setUpdatedOrderDetails,
    setOrderDetailsToUpdate,
    updateOrderStatus,
    setLoading,
    setError
} = ownerOrderManagementSlice.actions;
export default ownerOrderManagementSlice.reducer;