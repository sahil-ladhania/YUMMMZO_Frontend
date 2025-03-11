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
import deliveryManagementReducer from "./slices/deliveryManagementSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderSummaryReducer from "./slices/orderSummarySlice";
import menuTabsReducer from "./slices/menuTabsSlice";
import reviewsReducer from "./slices/reviewsSlice";
import reviewDirectCommentsReducer from "./slices/reviewDirectCommentsSlice"
import storage from 'redux-persist/lib/storage'; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// Yeh multiple reducers ko ek single reducer (rootReducer) me merge kar raha hai.
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
    ownerOrderManagement : ownerOrderManagementReducer,
    deliveryManagement : deliveryManagementReducer,
    orderSummary : orderSummaryReducer,
    menuTabs : menuTabsReducer,
    reviews : reviewsReducer,
    reviewDirectComments : reviewDirectCommentsReducer
})

const persistConfig = {
    // Yeh root key hai, jo localStorage me data save karne ke liye prefix ka kaam karegi.
    key : 'root',
    // Yeh define karta hai ki Redux state localStorage me save hogi ya kisi aur jagah.
    storage,
    // Yeh bata raha hai ki kon kon se reducer ka data persist hoga.
    whitelist : ['auth' , 'user' , 'restaurant' , 'cuisine' , 'restaurantsFeed' , 'topBrands' , 'filteredRestaurants' , 'menu' , 'menuFeed' , 'filteredMenuItems' , 'cart' , 'checkout' , 'order' , 'ownerOrderManagement' , 'deliveryManagement' , 'orderSummary']
}

// persistReducer Redux reducer ko wrap kar raha hai taki uska data persist ho sake.
// Ab persistedReducer ek aisa reducer ban gaya hai jo localStorage se data load kar sakta hai.
const persistedReducer = persistReducer(persistConfig , rootReducer);

// Yeh function ek persistor create kar raha hai Redux store ke liye.
// persistStore(store) har bar Redux store ke liye persist feature ko initialize karega.
const createPersistor = (store) => persistStore(store);

export {persistedReducer , createPersistor};