import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const IDLE = "idle";
const REQUEST = "request";
const REQUEST_FULFILLED = "request_fulfilled";
const REQUEST_REJECTED = "request_rejected";

const baseUrl = import.meta.env.VITE_BASE_URL;
const categories = baseUrl + "/categories";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
	try {
		const response = await fetch(categories);
		const data = await response.json();
		return data;
	} catch (error) {
		rejectWithValue(error);
	}
});

const initialState = {
	categories: [],
	status: IDLE,
	error: null,
};

const extraReducers = builder => {
	/**
	 * @description Fetch categories
	 */
	builder.addCase(fetchCategories.pending, (state, action) => {
		state.status = REQUEST;
	});
	builder.addCase(fetchCategories.fulfilled, (state, action) => {
		state.status = REQUEST_FULFILLED;
		state.categories = action.payload;
		state.status = IDLE;
	});
	builder.addCase(fetchCategories.rejected, (state, action) => {
		state.status = REQUEST_REJECTED;
		state.error = action.payload;
	});
};

const categorySlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers,
});

export default categorySlice.reducer;
