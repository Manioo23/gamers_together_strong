import React from 'react';
import Navbar from '../navbar/Navbar';
import { useQuery } from 'react-apollo';
import './HomeScreen.css';
import { DotLoader } from 'react-spinners';
import Carousel from '../carousel/Carousel';
import fetchGames from '../../queries/fetchGames';

const HomeScreen = (_) => {
	const {loading, error, data} = useQuery(fetchGames);

	if(loading) 
		return <DotLoader />
	else if(error)
		return <p>Error</p>
	else 
		return (
			<div className='Home'>
				<Navbar />
				<div className='Karuzela'>
					<Carousel urlBase={'/games'} data={data.games.map( v => ( {value: v.name, id: v.id} )) }/>
				</div>
				<div className='Stopka'>
					Footer
				</div>
			</div>   
		);
	
}

export default HomeScreen;