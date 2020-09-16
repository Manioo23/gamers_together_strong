import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import query from '../../queries/fetchGames'
import './Carousel.css';
import FadeLoader from 'react-spinners/FadeLoader'

// Komponent obsługujący karuzele na home screenie
//FIXME: Router nie jest tu potrzebny
const Carousel = withRouter((props) => {

	//UGLY: Miło by było ogarnąć kafelki karuzeli jako osobny komponent
	//FIXME: Metoda w metodzie that's a big no no
	const generateImages = () => {
		let games = props.data.games || [];
		if (games.length) {
			let res = games.map((v, i) => <div key={v.id} className={'Thumbnail'} onClick={() => props.history.push(`/games/${v.id}`)}>[  {v.name}  ]</div>);
			res.push(<div key={"addgame"} className={'Thumbnail'} onClick={() => props.history.push(`/games/add`)}>[ + ]</div>);
			return res;
		}
		else
			return <p style={{color: 'red', fontSize: '2em'}}>{props.data.error.message}</p>;
	};

	return (
		<div className='Carousel' style={props.style ? props.style : null}>
			<div className='Images'>
				{props.data.loading ? <FadeLoader css={{margin: '0px auto'}} color={"#fff"}/> : generateImages(props.data.games)}
			</div>
		</div>
	);
}); 

//UGLY: zamienić to na hooka
export default graphql(query)(Carousel);