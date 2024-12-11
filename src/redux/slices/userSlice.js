import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName : '',
    lastName : '',
    email : '',
    role : 'CUSTOMER'
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUser : (state, action) => {
            console.log(action);
            console.log("Current state in setUser reducer:", state);
            console.log("Action payload in setUser reducer:", action.payload);
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.role = action.payload.role;
            console.log("Updated state in setUser reducer:", state);
        },
        resetUser : () => initialState,
    }
})

export const { setUser , resetUser } = userSlice.actions;
export default userSlice.reducer;