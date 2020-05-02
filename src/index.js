import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from './reducers/reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
