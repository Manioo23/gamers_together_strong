import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewGame from './newgame/NewGame';
import GamePage from './gameScreen/GameScreen';
import HomeScreen from './homeScreen/HomeScreen';
import UserScreen from './userScreen/UserScreen';
import WrongScreen from './wrongScreen/WrongScreen';

const Routes = (
	<Switch>
		<Route path='/home' component={ HomeScreen }/>
		<Route path='/games/add' component={ NewGame }/>
		<Route path='/games/:id' component={ GamePage }/>
		<Route path='/users/:id' component={ UserScreen }/>
		<Route path='/' component={ WrongScreen }/>
	</Switch>
);

export default Routes;