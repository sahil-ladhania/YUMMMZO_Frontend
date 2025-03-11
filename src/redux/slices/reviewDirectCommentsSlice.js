import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    directComments : []
};

const reviewDirectCommentsSlice = createSlice({
    name : 'reviewDirectComments',
    initialState,
    reducers : {
        setDirectComments : (state , action) => {
            state.directComments = action.payload;
        }
    }
})

export const { 
    setDirectComments
} = reviewDirectCommentsSlice.actions;
export default reviewDirectCommentsSlice.reducer;