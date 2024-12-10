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
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        resetUser : () => initialState,
    }
})

export const { setUser , resetUser } = userSlice.actions;
export default userSlice.reducer;