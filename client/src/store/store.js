//FIXME: Refactor this file 
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import todoApp from './reducers/index';

export const history = createHistory();
const middelware = routerMiddleware(history);
export const store = createStore(todoApp, composeWithDevTools(applyMiddleware(middelware, thunk)));