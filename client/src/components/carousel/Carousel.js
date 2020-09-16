import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';

import query from '../../queries/fetchGames';
import './Carousel.css';
import FadeLoader from 'react-spinners/FadeLoader';

//UGLY: Miło by było ogarnąć kafelki karuzeli jako osobny komponent
const generateImages = (data, error) => {
	let games = data.games || [];
	if (games.length) {
		let res = games.map((v, i) => (
			<Link to={`/games/${v.id}`} key={v.id}>
				<div className={'Thumbnail'}>[  {v.name}  ]</div>
			</Link>
		));
		res.push(
			<Link to={'/games/add'} key={"addgame"}>
				<div className={'Thumbnail'}>[ + ]</div>
			</Link>
			);
		return res;
	}
	else
		return <p style={{color: 'red', fontSize: '2em'}}>{error.message}</p>;
};

// Komponent obsługujący karuzele na home screenie
const Carousel = (props) => {
	const {loading, error, data} = useQuery(query);
	return (
		<div className='Carousel' style={props.style ? props.style : null}>
			<div className='Images'>
				{loading ? <FadeLoader css={{margin: '0px auto'}} color={"#fff"}/> : generateImages(data, error)}
			</div>
		</div>
	);
}

export default Carousel;