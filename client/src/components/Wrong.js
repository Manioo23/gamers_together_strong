import React from 'react';
import { withRouter } from 'react-router-dom';

const Wrong = withRouter((props) => {
	return(
		<div className='Wrong'>
			<p style={{margin: '0px'}}>Error has occured!<br/>Please restart the system</p>
			<div className="Box" onClick={() => props.history.push('/home')}>X</div>
		</div>
			
	);
});

export default Wrong;