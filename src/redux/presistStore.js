import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import userReducer from './slices/userSlice';
import restaurantRegistrationReducer from './slices/restaurantRegistrationSlice';
import storage from 'redux-persist/lib/storage'; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    restaurant : restaurantRegistrationReducer,
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth' , 'user']
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

const createPersistor = (store) => persistStore(store);

export {persistedReducer , createPersistor};