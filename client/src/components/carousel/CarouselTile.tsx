import * as React from 'react';
import { Link } from 'react-router-dom';

import * as style from './Carousel.scss';

type CarouselTileProps = {
    value: string,
    imgUrl: string,
    key?: string,
    linkTo?: string,
    className?: string
}

const CarouselTile: React.FC<CarouselTileProps> = ({value, imgUrl, linkTo, className}) => {
    if( linkTo ) {
        return (
            <Link to={linkTo} className={style.carouselTile}>
                <div className={style.top}>
                    {value}
                </div>
                <div className={style.bottom}>
                    <div className={style.bottomImg} style={{backgroundImage: `url(${imgUrl})`}}/>
                </div>
            </Link>
        );
    } else 
        return (
            <div className={style.carouselTile}>
                <div className={style.top}>
                    {value}
                </div>
                <div className={style.bottom}>
                    <div className={style.bottomImg} style={{backgroundImage: `url(${imgUrl})`}}/>
                </div>
            </div>
        )
}

CarouselTile.displayName = 'CarouselTile';
export default CarouselTile;