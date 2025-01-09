import { createSlice } from "@reduxjs/toolkit"

// This is the Initial State when User is trying to Signup.
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
        // Reducer for Setting the User
        setUser : (state , action) => {
            state.userData = action.payload;
        },
        // Reducer when the Signup will Start
        signupStart : (state) => {
            state.signupLoading = true;
            state.signupSuccess = false;
            state.signupError = "";
        },
        // Reducer when the Signup will be Successfull
        signupSuccessfull : (state , action) => {
            state.signupLoading = false;
            state.signupSuccess = true;
            state.userData = action.payload;
        },
        // Reducer when the Signup will Fail
        signupFailure : (state , action) => {
            state.signupLoading = false;
            state.signupError = action.payload;
        },
        // Reducer when User will start changing the Password
        changePasswordStart : (state) => {
            state.changePasswordLoading = true;
            state.changePasswordSuccess = false;
            state.changePasswordError = "";
        },
        // Reducer when User will successfully change the Password
        changePasswordSuccessfull : (state) => {
            state.changePasswordLoading = false;
            state.changePasswordSuccess = true;
        },
        // Reducer when User will Fail in changing the Password
        changePasswordFailure : (state , action) => {
            state.changePasswordLoading = false;
            state.changePasswordError = action.payload;
        },
    }
})

export const { setUser , signupStart , signupFailure , signupSuccessfull , changePasswordStart , changePasswordSuccessfull , changePasswordFailure } = userSlice.actions;
export default userSlice.reducer;