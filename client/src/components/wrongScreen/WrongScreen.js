import React from 'react';
import { Link } from 'react-router-dom';

import * as style from './WrongScreen.scss';

const WrongScreen = (props) => (
	<div className={style.wrongScreen}>
		<p style={{ margin: '0px' }}>Error has occured!<br />Please restart the system</p>
		<Link to={'/home'}>
			<div className={style.box}>X</div>
		</Link>
	</div>
);


export default WrongScreen; 