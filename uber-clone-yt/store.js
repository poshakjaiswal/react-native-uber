import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice"; // store navigation information such as origin etc


export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});