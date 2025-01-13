import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./presistStore";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck : false
        })
});

const persistor = persistStore(store);

export {store , persistor};