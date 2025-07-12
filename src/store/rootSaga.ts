import { all } from "redux-saga/effects";
import productSaga from "../features/sagas";

export default function* rootSaga() {
    yield all([
        productSaga(),
    ])
}