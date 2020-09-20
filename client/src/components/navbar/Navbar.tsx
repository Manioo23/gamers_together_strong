import * as React from 'react';
import Button from '../button/Button';
import './Navbar.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<div className='Navbar'>
			<div className='Logo'>
				Logo
			</div>
			<div className='Navmenu'>
				<Button onClick={() => null} value='Sign in' linkTo={'/login'}/>
			</div>
		</div>   
	);
}

export default Navbar;