import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import helloReducer from './hello';

const helloApp = combineReducers({
	helloReducer,
	routerReducer
});

export default helloApp;