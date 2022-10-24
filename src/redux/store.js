
import combineReducers from './reducers/combineReducers';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
);