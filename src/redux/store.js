import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import productReducer from "./product/productReducer";

export default configureStore({
    reducer: {
        counter : counterReducer,
        product : productReducer
    }
})