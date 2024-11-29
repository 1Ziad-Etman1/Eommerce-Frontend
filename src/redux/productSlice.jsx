import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	searchKey: "",
	filteredData: [],
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
		search(state, action) {
			state.searchKey = action.payload;
			state.filteredData = state.products.filter((product) =>
				product.name
					.toLowerCase()
					.includes(state.searchKey.toLowerCase())
			);
		},
	},
});

export const { setProducts,search } = productSlice.actions;
export default productSlice.reducer;
