import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

// configureStore is used to create the Redux store and handle middleware automatically.
const store = configureStore({
    // An object that maps slice names to their corresponding reducers.
    reducer: {
        auth : authReducer,
        user : userReducer
    }
})

export default store;