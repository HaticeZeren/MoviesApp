import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware,compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const allEnhancers=compose(
	applyMiddleware(    reduxPromiseMiddleware(),logger,thunk),//Birden fazla middleware toplamamıza yarar.
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const store=createStore(
    rootReducer,
    allEnhancers
    );
ReactDOM.render(
<BrowserRouter>
<Provider  store={store}>
    <App />
</Provider>
</BrowserRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
