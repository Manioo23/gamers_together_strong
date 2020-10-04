import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import NewGame from './newgame/NewGame';
import GamePage from './gameScreen/GameScreen';
import HomeScreen from './homeScreen/HomeScreen';
import UserScreen from './userScreen/UserScreen';
import WrongScreen from './wrongScreen/WrongScreen';
import { containerInner } from '../styles/index.scss';

const Container = ({children}) => (
	<div className={containerInner}>
		<Navbar />
		{children}
	</div>
);

const Routes = (
	<Switch>
		<Container>
			<Route path='/home' component={ HomeScreen }/>
			<Route path='/games/add' component={ NewGame }/>
			<Route path='/games/:id' component={ GamePage }/>
			<Route path='/users/:id' component={ UserScreen }/>
			<Route path='/404' component={ WrongScreen }/>
		</Container>
	</Switch>
);

export default Routes;