
import { combineReducers } from 'redux';
import app from './app';
import dogs from './reducer';

const reducer = combineReducers({app, dogs});

export default reducer;