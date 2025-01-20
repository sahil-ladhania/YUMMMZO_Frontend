import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    cuisines : []
}

export const cuisineFeedSlice = createSlice({
    name : "cuisine",
    initialState,
    reducers : {
        setCuisines : (state , action) => {
            state.cuisines = action.payload;
        }
    }
})


export const { setCuisines } = cuisineFeedSlice.actions;
export default cuisineFeedSlice.reducer;