import { all } from "redux-saga/effects";
import { watchProductList } from "./fetchProductList";

export default function* productSaga(){
    yield all([
        watchProductList(),
    ])
}