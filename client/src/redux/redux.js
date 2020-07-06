import {combineReducers, createStore, applyMiddleware} from "redux"
import {reducer as formReducer} from "redux-form"
import { authReducer } from "./authReducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth:authReducer,
  form:formReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
window.store = store

export default store
