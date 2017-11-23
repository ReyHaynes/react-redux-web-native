import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import rootReducer from "../reducers"

let initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const config = {
  key: 'app',
  storage,
}

const reducer = persistCombineReducers(config, rootReducer)
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

export { store as default, persistor }
