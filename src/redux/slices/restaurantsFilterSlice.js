import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    filteredRestaurantsList : [],
    searchText : '',
    filter : {
        veg : null,
        priceRange : [null , null]
    },
    sortOption : 'Relevance(Default)',
    isLoading : false,
    error : null
}

export const restaurantsFilterSlice = createSlice({
    name : 'filteredRestaurants',
    initialState,
    reducers : {
        setSearchText : (state , action) => {
            state.searchText = action.payload;
        },
        setFilter : (state , action) => {
            state.filter = action.payload;
        },
        setSortOption : (state , action) => {
            state.sortOption = action.payload;
        },
        setFilteredRestaurants : (state , action) => {
            state.filteredRestaurantsList = action.payload.filteredRestaurants;
        },
        setLoading : (state , action) => {
            state.isLoading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        },
    }
})

export const { setSearchText , setFilter , setSortOption , setFilteredRestaurants , setLoading , setError } = restaurantsFilterSlice.actions;
export default restaurantsFilterSlice.reducer;