import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import restaurantRegistrationReducer from './slices/restaurantRegistrationSlice';

const store = configureStore({
    reducer : {
        auth : authReducer,
        user : userReducer,
        restaurant : restaurantRegistrationReducer,
    }
});

export default store;