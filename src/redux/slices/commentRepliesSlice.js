import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   replies : [], 
};

const commentRepliesSlice = createSlice({
    name : 'commentReplies',
    initialState,
    reducers : {
        setReplies : (state , action) => {
            state.replies = action.payload;
        }
    }
});

export const { 
    setReplies
} = commentRepliesSlice.actions;
export default commentRepliesSlice.reducer;