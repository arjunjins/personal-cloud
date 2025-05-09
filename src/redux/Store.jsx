import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Auth.jsx"

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;