import {applyMiddleware, legacy_createStore, compose} from 'redux';

import reducer from '../reducer/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
