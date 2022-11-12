import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const IDLE = "idle";
export const REQUEST = "request";
export const REQUEST_FULFILLED = "request_fulfilled";
export const REQUEST_REJECTED = "request_rejected";

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

export const fetchCurrentCategory = createAsyncThunk(
	"categories/fetchCurrentCategory",
	async id => {
		try {
			const response = await fetch(`${categories}/${id}`);
			const data = await response.json();
			return data;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

const initialState = {
	categories: [],
	currentCategory: [],
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
	});
	builder.addCase(fetchCategories.rejected, (state, action) => {
		state.status = REQUEST_REJECTED;
		state.error = action.payload;
	});

	/**
	 * @description Fetch current category
	 */
	builder.addCase(fetchCurrentCategory.pending, (state, action) => {
		state.status = REQUEST;
	});
	builder.addCase(fetchCurrentCategory.fulfilled, (state, action) => {
		state.status = REQUEST_FULFILLED;
		state.currentCategory = action.payload;
	});
	builder.addCase(fetchCurrentCategory.rejected, (state, action) => {
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
