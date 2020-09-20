import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

type ButtonProps = {
	value: string,
	className?: string,
	linkTo?: string,
	onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({className, onClick, value, linkTo}) => {
	const button = (
		<div className={`button ${className}`} onClick={onClick}>
			{value}
		</div>
	);

	if(linkTo)
		return (
			<Link to={linkTo}>
				{button}
			</Link>
		)
	else
		return button
}; 

Button.displayName = 'Button';
export default Button;