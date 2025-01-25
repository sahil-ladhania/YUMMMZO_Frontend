import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menus : [],
    selectedMenu : null,
    isMenuSelected : false,
    selectedMenuItems : [],
  };

export const menuFeedSlice = createSlice({
    name : "menuFeed",
    initialState,
    reducers : {
        setMenus : (state, action) => {
            state.menus = action.payload;
        },
        setSelectedMenu : (state , action) => {
            state.selectedMenu = action.payload;
        },
        setIsMenuSelected : (state , action) => {
            state.isMenuSelected = action.payload;
        },
        setMenuItems : (state , action) => {
            state.selectedMenuItems = action.payload;
        }
    }
});

export const { 
    setMenus,
    setSelectedMenu,
    setIsMenuSelected,
    setMenuItems
} = menuFeedSlice.actions;
export default menuFeedSlice.reducer;