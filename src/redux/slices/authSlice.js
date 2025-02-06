import { createSlice } from "@reduxjs/toolkit"

// This is the initial state for user when he is trying to Login
const initialState = {
    isAuthenticated : false,
    user : null,
    loginloading : false,
    loginSuccess : false,
    loginError : "",
    logoutLoading : false,
    logoutSuccess : false,
    logoutError : "",
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginStart : (state) => {
            state.loginloading = true;
            state.loginSuccess = false;
            state.loginError = "";
        },
        loginSuccessfull : (state , action) => {
            state.loginloading = false;
            state.loginSuccess = true;
            state.isAuthenticated = true;
            state.user = action.payload.existingUser;
        },
        loginFailure : (state , action) => {
            state.loginloading = false;
            state.loginError = action.payload;
        },
        logoutStart : (state) => {
            state.logoutLoading = true;
            state.loginSuccess = false;
            state.logoutError = "";
        },
        logoutSuccessfull : (state) => {
            state.logoutLoading = false;
            state.logoutSuccess = true;
            state.isAuthenticated = false;
            state.user = null;
            localStorage.clear();
        },
        logoutFailure : (state , action) => {
            state.logoutLoading = false;
            state.logoutError = action.payload;
        },
    }
})

export const { 
    loginStart , 
    loginSuccessfull , 
    loginFailure , 
    logoutStart ,  
    logoutSuccessfull , 
    logoutFailure 
} = authSlice.actions;
export default authSlice.reducer;