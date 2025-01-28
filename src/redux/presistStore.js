import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import userReducer from './slices/userSlice';
import restaurantRegistrationReducer from './slices/restaurantRegistrationSlice';
import cuisineFeedReducer from "./slices/cuisinesFeedSlice";
import restaurantsFeedReducer from "./slices/restaurantsFeedSlice";
import topBrandsReducer from "./slices/topBrandsSlice";
import restaurantsFilterReducer from "./slices/restaurantsFilterSlice";
import menuCreationReducer from "./slices/menuCreationSlice";
import menuFeedReducer from "./slices/menuFeedSlice";
import menuItemsFilterReducer from "./slices/menuItemsFilterSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import ownerOrderManagementReducer from "./slices/ownerOrderManagementSlice";
import checkoutReducer from "./slices/checkoutSlice";
import storage from 'redux-persist/lib/storage'; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    restaurant : restaurantRegistrationReducer,
    cuisine : cuisineFeedReducer,
    restaurantsFeed : restaurantsFeedReducer,
    topBrands : topBrandsReducer,
    filteredRestaurants : restaurantsFilterReducer,
    menu : menuCreationReducer,
    menuFeed : menuFeedReducer,
    filteredMenuItems : menuItemsFilterReducer,
    cart : cartReducer,
    checkout : checkoutReducer,
    order : orderReducer,
    ownerOrderManagement : ownerOrderManagementReducer
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth' , 'user']
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

const createPersistor = (store) => persistStore(store);

export {persistedReducer , createPersistor};