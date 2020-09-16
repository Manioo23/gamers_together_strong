import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrong from './Wrong';
import HomeScreen from './homeScreen/HomeScreen';
import NewGame from './newgame/NewGame';
import GamePage from './gamepage/GamePage';

const Routes = (
	<Switch>
		<Route path='/home' component={ HomeScreen }/>
		<Route path='/games/add' component={ NewGame }/>
		<Route path='/games/:id' component={ GamePage }/>
		<Route path='/' component={ Wrong }/>
	</Switch>
);

export default Routes;