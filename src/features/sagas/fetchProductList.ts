import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure } from "../slices/productSlice";
import { fetchAllProducts } from "../../services/productService";

function* fetchProductList(): Generator<any, void, any> {
    try {
        const data = yield call(fetchAllProducts);
        yield put(fetchProductsSuccess(data))
    } catch (e: any) {
        yield put(fetchProductsFailure(e.message))
    }
}

export function* watchProductList() {
    yield takeEvery(fetchProducts.type, fetchProductList)
}