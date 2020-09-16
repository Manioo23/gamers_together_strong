import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import './HomeScreen.css';
import Carousel from '../carousel/Carousel';

class HomeScreen extends Component {
	render() {
		return (
			<div className='Home'>
				<Navbar />
				<div className='Karuzela'>
					<Carousel/>
				</div>
				<div className='Stopka'>
                    Footer
				</div>
			</div>   
		);
	}
}

export default HomeScreen;