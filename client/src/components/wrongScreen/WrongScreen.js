import React from 'react';
import { Link } from 'react-router-dom';

import './WrongScreen.scss';

const WrongScreen = (props) => (
	<div className='wrong-screen'>
		<p style={{ margin: '0px' }}>Error has occured!<br />Please restart the system</p>
		<Link to={'/home'}>
			<div className="Box">X</div>
		</Link>
	</div>
);


export default WrongScreen; 