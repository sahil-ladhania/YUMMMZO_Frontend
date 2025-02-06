import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./presistStore";
import persistStore from "redux-persist/es/persistStore";

// configureStore Redux Toolkit ka function hai jo store banata hai.
const store = configureStore({
    // persistedReducer hum persistStore.js se import kar rahe hain (jisme persist logic hai).
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck : false
        })
});

// persistStore ek function hai jo Redux store ke liye persistor banata hai (jo data ko storage me save karega).
const persistor = persistStore(store);

export {store , persistor};