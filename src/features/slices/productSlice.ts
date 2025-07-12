import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

type ProductState = {
    loading: boolean;
    error: string | null;
    list: Product[];
}

const initialState: ProductState = {
    loading: false,
    error: null,
    list: [],
}

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        fetchProducts: (state) => {
            state.loading = true;
            state.error = null
        },
        fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
            state.list = action.payload,
                state.loading = false
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload,
                state.loading = false
        }
    }
})

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions
export default productSlice.reducer;