import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    // reducer - An object where each key represents a slice name, and its value is the respective reducer function.
    reducer: {
        auth : authReducer,
        user : userReducer
    }
})

export default store;