import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token : null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        login : (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout : (state, action) => {
            state.token = null;
            state.isAuthenticated = false;
        },
    }
})

export const { login , logout} = authSlice.actions;
export default authSlice.reducer;