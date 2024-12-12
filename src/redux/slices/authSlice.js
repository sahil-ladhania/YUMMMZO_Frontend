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
        loginStart : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        loginSuccess : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        loginFailure : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
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