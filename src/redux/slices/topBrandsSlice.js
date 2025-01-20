import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    topBrands : []
}

export const topBrandsSlice = createSlice({
    name : 'topBrands',
    initialState,
    reducers : {
        setTopBrands : (state , action) => {
            state.topBrands = action.payload;
        }   
    }
})

export const { setTopBrands } = topBrandsSlice.actions;
export default topBrandsSlice.reducer;