import { createStore } from 'redux';
import setTheme from './reducers/setThemeReducer';

const store = createStore(setTheme);

export default store;
