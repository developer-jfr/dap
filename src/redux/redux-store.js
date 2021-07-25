import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { dappletsReducer } from './reducers/dapplets-reducer';


const rootReducer = combineReducers({
  dapplets: dappletsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));