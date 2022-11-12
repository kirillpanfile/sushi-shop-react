// create redux store
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
import categoryReducer from "./category";
import thunk from "redux-thunk";

const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoryReducer,
	},
	middleware: [thunk],
});

export default store;
