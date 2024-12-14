import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token : null,
    isAuthenticated : false,
    user : null,
    loginloading : false,
    loginSuccess : false,
    loginError : ""
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
        loginSuccess : (state , action) => {
            state.loginloading = false;
            state.loginSuccess = true;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.existingUser;
        },
        loginFailure : (state , action) => {
            state.loginloading = false;
            state.loginError = action.payload;
        },
        logout : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        }
    }
})

export const { loginStart , loginSuccess , loginFailure , logout } = authSlice.actions;
export default authSlice.reducer;