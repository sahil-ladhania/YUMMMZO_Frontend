import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    restaurantId :  null,
    menus : [],
    currentMenu : {
        menuName : '',
        description : '',
        isActive : false,
        menuItems : [
            {
                itemName : '',
                itemPrice : 0,
                quantity : 1,
                itemDescription : '',
                isPureVeg : false,
                isBestSeller : false,
                itemImage : '',
                itemCategory : ''
            }
        ]
    },
    loading : false,
    error : null,
    success : false
}

export const menuCreationSlice = createSlice({
    name : 'menu',
    initialState,
    reducers : {
        setLoading : (state , action) => {
            state.loading = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        },
        setSuccess : (state , action) => {
            state.success = action.payload;
        },
        setRestaurantId : (state , action) => {
            state.restaurantId = action.payload;
        },
        setMenus : (state , action) => {
            state.menus = action.payload;
        },
        fetchMenusSuccess : (state , action) => {
            // Logic
        },
        createMenuSuccess : (state , action) => {
            // Logic
        },
        updateMenu : (state , action) => {
            // Logic
        },
        deleteMenu : (state , action) => {
            // Logic
        },
        setCurrentMenu : (state , action) => {
            // Logic
        },
        addMenuItem : (state , action) => {
            // Logic
        },
        removeMenuItem : (state , action) => {
            // Logic
        },
        updateMenuItem : (state , action) => {
            // Logic
        }
    }
})

export const { 
    setLoading,
    setError,
    setSuccess,
    setRestaurantId,
    setMenus,
    fetchMenusSuccess,
    createMenuSuccess,
    updateMenu,
    deleteMenu,
    setCurrentMenu,
    addMenuItem,
    removeMenuItem,
    updateMenuItem
} = menuCreationSlice.actions;
export default menuCreationSlice.reducer;