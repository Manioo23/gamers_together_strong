import * as React from 'react';
import { ApolloError } from 'apollo-client';

import './Carousel.scss';
import CarouselTile from './CarouselTile';

type CarouselProps = {
	urlBase: string,
	data: Array<CarouselData>
	className?: string,
}

type CarouselData = {
	value: string,
	id: string,
}

const generateTiles = (values: Array<CarouselData>, urlBase: string, error?: ApolloError) => {
	if (values.length) {
		let res = values.map((v: {value: string, id: string}, i: number) => <CarouselTile linkTo={`${urlBase}/${v.id}`} key={v.id} value={`[ ${v.value} ]`}/> );
		res.push( <CarouselTile linkTo={`${urlBase}/add`} key={"addgame"} value={`[ + ]`}/> );
		return res;
	}
	else
		return <p>oopsie</p>
};

// Komponent obsługujący karuzele na home screenie
const Carousel: React.FC<CarouselProps> = ({urlBase, data}) => {
	return (
		<div className='carousel'>
			<div className='tiles-container'>
				{generateTiles(data, urlBase)}
			</div>
		</div>
	);
}

Carousel.displayName = 'Carousel';
export default Carousel;