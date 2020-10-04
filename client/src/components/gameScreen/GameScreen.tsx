import React from 'react';
import { useQuery } from 'react-apollo';
import FadeLoader from 'react-spinners/FadeLoader';

import * as style from './GameScreen.scss';
import fetchGame from '../../queries/fetchGame';
import { Redirect } from 'react-router-dom';

//FIXME: This props should defeniately not be of type any
const GameScreen = (props: any) => {
    const GameId = props.match.params.id;
    const {loading, error, data} = useQuery(fetchGame, { variables: { id: GameId }});
    if(loading) {
        return <FadeLoader css={'margin: 0px auto'} color={"#fff"}/>;
    } else if(error) {
        return <Redirect to='/home'/>;
    } else {
        const { name, description, imgUrl, genre} = data.game;
        return (
            <div className={style.gameScreen}>
                <div className={style.left}>
                    <div className={style.gameCoverImg} style={{backgroundImage: `url(${imgUrl})`}}/>
                </div>
                <div className={style.middle}>
                    <div className={style.name}>
                        <div className={style.key}>Name:</div>
                        <div className={style.value}>{name}</div>
                    </div>
                    <div className={style.genre}>
                        <div className={style.key}>Genre:</div>
                        <div className={style.value}>{genre.name}</div>
                    </div>
                    <div className={style.description}>
                        <div className={style.key}>Description:</div>
                        <div className={style.value}>{description}</div>
                    </div>
                    <div className={style.middleDivider}/>
                </div>
                <div className={style.right}>
                    {/**TODO: Dodadać ikony innych gier */}
                    Nothing for now
                </div>
            </div>
        )
    }
}

export default GameScreen;