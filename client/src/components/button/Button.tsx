import React from 'react';
import './Button.scss';

type ButtonProps = {
	value: string,
	className?: string,
	onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({className, onClick, value}) => {
	return (
		<div className={`button ${className}`} onClick={onClick}>
			{value}
		</div>
	);
}; 

export default Button;