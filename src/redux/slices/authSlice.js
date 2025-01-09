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
        // Reducer when the Login will Start
        loginStart : (state) => {
            state.loginloading = true;
            state.loginSuccess = false;
            state.loginError = "";
        },
        // Reducer when the Login will be Successfull
        loginSuccessfull : (state , action) => {
            state.loginloading = false;
            state.loginSuccess = true;
            state.isAuthenticated = true;
            state.user = action.payload.existingUser;
        },
        // Reducer when the Login will Fail
        loginFailure : (state , action) => {
            state.loginloading = false;
            state.loginError = action.payload;
        },
        // Reducer when user wants to Logout
        logoutStart : (state) => {
            state.logoutLoading = true;
            state.loginSuccess = false;
            state.logoutError = "";
        },
        //Reducer when the Logout will be Successfull
        logoutSuccessfull : (state) => {
            state.logoutLoading = false;
            state.logoutSuccess = true;
            state.isAuthenticated = false;
            state.user = null;
            
        },
        // Reducer when Logout will Fail
        logoutFailure : (state , action) => {
            state.logoutLoading = false;
            state.logoutError = action.payload;
        },
    }
})

export const { loginStart , loginSuccessfull , loginFailure , logoutStart ,  logoutSuccessfull , logoutFailure } = authSlice.actions;
export default authSlice.reducer;