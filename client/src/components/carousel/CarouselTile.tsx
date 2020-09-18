import * as React from 'react';
import { Link } from 'react-router-dom';
type CarouselTileProps = {
    value: string,
    key?: string,
    linkTo?: string,
    className?: string
}

const CarouselTile: React.FC<CarouselTileProps> = ({value, linkTo, className}) => {
    let finalClassName = `carousel-tile ${className || null}`;
    if( linkTo ) {
        return (
            <Link to={linkTo} className={finalClassName}>
                {value}
            </Link>
        );
    } else 
        return (
            <div className={`carousel-tile ${className || null}`}>
                {value}
            </div>
        )
}

CarouselTile.displayName = 'CarouselTile';
export default CarouselTile;