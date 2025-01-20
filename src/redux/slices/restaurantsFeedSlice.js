import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantsFeedList : []
}

export const restaurantsFeedSlice = createSlice({
    name : 'restaurantsFeed',
    initialState,
    reducers : {
        setRestaurantsFeed : (state , action) => {
            state.restaurantsFeedList = action.payload;
        }
    }
})

export const { setRestaurantsFeed } = restaurantsFeedSlice.actions;
export default restaurantsFeedSlice.reducer;