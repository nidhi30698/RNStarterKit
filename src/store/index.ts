import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducers";
import rootSaga from "./rootSaga";
const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;