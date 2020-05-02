import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = create(rootReducer, applyMiddleware(thunk));

