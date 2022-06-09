import {applyMiddleware, createStore, compose} from 'redux';

import reducer from '../reducer/reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
