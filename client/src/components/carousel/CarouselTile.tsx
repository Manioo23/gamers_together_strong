import * as React from 'react';
import { Link } from 'react-router-dom';

import * as style from './Carousel.scss';

type CarouselTileProps = {
    value: string,
    key?: string,
    linkTo?: string,
    className?: string
}

const CarouselTile: React.FC<CarouselTileProps> = ({value, linkTo, className}) => {
    if( linkTo ) {
        return (
            <Link to={linkTo} className={style.carouselTile}>
                <div className={style.top}>
                    {value}
                </div>
                <div className={style.bottom}>
                    <div className={style.bottomImg} style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg')"}}/>
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
                    <div className={style.bottomImg} style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg')"}}/>
                </div>
            </div>
        )
}

CarouselTile.displayName = 'CarouselTile';
export default CarouselTile;