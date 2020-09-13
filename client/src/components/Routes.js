import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrong from './Wrong';
import Home from './home/Home';
import NewGame from './newgame/NewGame';

const Routes = (
	<Switch>
		<Route path='/home' component={ Home }/>
		<Route path='/games/add' component={ NewGame } />
		<Route path='/' component={ Wrong }/>
		
	</Switch>
);

export default Routes;