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
            state.userData = action.payload;
        },
        signupStart : (state) => {
            state.signupLoading = true;
            state.signupSuccess = false;
            state.signupError = "";
        },
        signupSuccess : (state , action) => {
            state.signupLoading = false;
            state.signupSuccess = true;
            state.userData = action.payload;
        },
        signupFailure : (state , action) => {
            state.signupLoading = false;
            state.signupError = action.payload;
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