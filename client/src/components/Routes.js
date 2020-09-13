import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrong from './Wrong';
import Home from './home/Home';
import NewGame from './newgame/NewGame';
import GamePage from './gamepage/GamePage';

const Routes = (
	<Switch>
		<Route path='/home' component={ Home }/>
		<Route path='/games/add' component={ NewGame }/>
		<Route path='/games/:id' component={ GamePage }/>
		<Route path='/' component={ Wrong }/>
	</Switch>
);

export default Routes;