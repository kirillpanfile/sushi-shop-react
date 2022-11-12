import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const IDLE = "idle";
export const REQUEST = "request";
export const REQUEST_FULFILLED = "request_fulfilled";
export const REQUEST_REJECTED = "request_rejected";

const baseUrl = import.meta.env.VITE_BASE_URL;

const products = baseUrl + "/all-sushi";
const recommendedProducts = baseUrl + "/recommended-sushi";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	try {
		const response = await fetch(products);
		const data = await response.json();
		return data;
	} catch (error) {
		rejectWithValue(error);
	}
});

export const fetchRecommendedProducts = createAsyncThunk(
	"products/fetchRecommendedProducts",
	async () => {
		try {
			const response = await fetch(recommendedProducts);
			const data = await response.json();
			return data;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

const initialState = {
	products: [],
	recomendedProducts: [],
	status: IDLE,
	error: null,
};

const extraReducers = builder => {
	/**
	 * @description Fetch products
	 */
	builder.addCase(fetchProducts.pending, (state, action) => {
		state.status = REQUEST;
	});
	builder.addCase(fetchProducts.fulfilled, (state, action) => {
		state.status = REQUEST_FULFILLED;
		state.products = action.payload;
	});
	builder.addCase(fetchProducts.rejected, (state, action) => {
		state.status = REQUEST_REJECTED;
		state.error = action.payload;
	});

	/**
	 * @description Fetch recommended products
	 */
	builder.addCase(fetchRecommendedProducts.pending, (state, action) => {
		state.status = REQUEST;
	});
	builder.addCase(fetchRecommendedProducts.fulfilled, (state, action) => {
		state.status = REQUEST_FULFILLED;
		state.recomendedProducts = action.payload;
	});
	builder.addCase(fetchRecommendedProducts.rejected, (state, action) => {
		state.status = REQUEST_REJECTED;
		state.error = action.payload;
	});
};

const options = {
	name: "products",
	initialState,
	reducers: {},
	extraReducers,
};

const productsSlice = createSlice(options);

export default productsSlice.reducer;
