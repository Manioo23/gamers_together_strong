import * as React from 'react';
import { ApolloError } from 'apollo-client';

import * as style from './Carousel.scss';
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
	return 	values.length ?
			values.map((v: {value: string, id: string}, i: number) => <CarouselTile linkTo={`${urlBase}/${v.id}`} key={v.id} value={v.value}/> ) :
			<p>oopsie</p>;
};

// Komponent obsługujący karuzele na home screenie
const Carousel: React.FC<CarouselProps> = ({urlBase, data}) => {
	return (
		<div className={style.carousel}>
			{generateTiles(data, urlBase)}
		</div>
	);
}

Carousel.displayName = 'Carousel';
export default Carousel;