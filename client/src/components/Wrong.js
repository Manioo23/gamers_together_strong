import React from 'react';
import { Link } from 'react-router-dom';

const Wrong = (props) => (
	<div className='Wrong'>
		<p style={{ margin: '0px' }}>Error has occured!<br />Please restart the system</p>
		<Link to={'/home'}>
			<div className="Box">X</div>
		</Link>
	</div>
);


export default Wrong; 