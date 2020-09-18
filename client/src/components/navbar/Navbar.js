import React, { Component } from 'react';
import Button from '../button/Button';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<div className='Logo'>
                    Logo
				</div>
				<div className='Navmenu'>
					<Button onClick={() => null} value='Sign in'/>
					<Button onClick={() => null} value='Sign up' style={{backgroundColor: '#FF3B3B'}}/>
				</div>
			</div>   
		);
	}
}

export default Navbar;