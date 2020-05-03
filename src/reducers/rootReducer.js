import { combineReducers } from 'redux';
import apiReducer from './reducer';

const rootReducer = combineReducers ({
  apiReducer,
})

export default rootReducer;