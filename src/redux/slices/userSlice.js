import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData : {
        firstName : "",
        lastName : "",
        email : "",
        role : "CUSTOMER"
    },
    signupLoading : false,
    signupSuccess : false,
    signupError : "",
    changePasswordLoading : false,
    changePasswordSuccess : false,
    changePasswordError : ""
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUser : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        signupStart : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        signupSuccess : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        signupFailure : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        changePasswordStart : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        changePasswordSuccess : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
        changePasswordFailure : (state , action) => {
            // Add logic
            console.log(state);
            console.log(action);
            console.log(action.type);
            console.log(action.payload);
        },
    }
})

export const { setUser , signupStart , signupFailure , signupSuccess , changePasswordStart , changePasswordSuccess , changePasswordFailure } = userSlice.actions;
export default userSlice.reducer;