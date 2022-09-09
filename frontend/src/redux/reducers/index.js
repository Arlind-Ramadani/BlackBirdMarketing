import { combineReducers } from 'redux';
import setThemeReducer from './setThemeReducer';

const allReducers = combineReducers({ setTheme: setThemeReducer });

export default allReducers;
