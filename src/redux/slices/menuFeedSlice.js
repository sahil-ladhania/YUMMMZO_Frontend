import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menus : [],
    selectedMenuItems : []
  };

export const menuFeedSlice = createSlice({
    name : "menuFeed",
    initialState,
    reducers : {
        setMenus : (state, action) => {
            state.menus = action.payload;
        },
        setMenuItems : (state , action) => {
            state.selectedMenuItems = action.payload;
        }
    }
});

export const { 
    setMenus,
    setMenuItems
} = menuFeedSlice.actions;
export default menuFeedSlice.reducer;