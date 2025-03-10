import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeTab : "order-online"
};

const menuTabsSlice = createSlice({
    initialState,
    name : "menuTabs",
    reducers : {
        setActiveMenuTab : (state , action) => {
            state.activeTab = action.payload;
        }
    }
})

export const { 
    setActiveMenuTab
} = menuTabsSlice.actions;
export default menuTabsSlice.reducer;