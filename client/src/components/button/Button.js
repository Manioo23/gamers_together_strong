import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<div className='Button' onClick={()=>props.onClick()} style={props.style ? props.style : null}>
			{props.value}
		</div>
	);
}; 

export default Button;