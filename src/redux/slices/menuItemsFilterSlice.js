import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    filteredMenuItemsList : [],
    filter : {
        veg : null,
        availability : null
    },
    searchText : "",
    sortByPriceOption : "",
    sortByCategoryOption : "",
    isLoading : false,
    error : null
}

const menuItemsFilterSlice = createSlice({
    name : "filteredMenuItems",
    initialState,
    reducers : {
        setFilteredMenuItems : (state , action) => {
            state.filteredMenuItemsList = action.payload;
        },
        setSearchText : (state , action) => {
            state.searchText = action.payload;
        },
        setFilter : (state , action) => {
            // logic
        },
        setSortByPriceOption : (state , action) => {
            // logic
        },
        setSortByCategoryOption : (state , action) => {
            // logic
        },
        setLoading : (state , action) => {
            state.isLoading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        }
    }
})

export const { 
    setFilteredMenuItems,
    setFilter,
    setSearchText,
    setSortByPriceOption,
    setSortByCategoryOption,
    setLoading,
    setError
} = menuItemsFilterSlice.actions;
export default menuItemsFilterSlice.reducer;