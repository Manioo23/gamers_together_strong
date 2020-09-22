import React from 'react';
import { useQuery } from 'react-apollo';
import fetchGame from '../../queries/fetchGame';
import FadeLoader from 'react-spinners/FadeLoader'
import { GameType } from '../../types';

// Podstrona dla pojedynczej gry

const prepareGameInfo = ({ game }: {game: GameType}) => {
    return (
        <div>
            <p>Name: {game.name}</p>
            <p>Description: {game.description}</p>
            <p>Genre: {game.genre.name}</p>
            <br/>
            <p>Users:</p>
            {
                game.users.length ?
                <div>
                    { game.users.map( (v, i) => <p key={i}>{v.username}</p>)}
                </div> :
                <p>No users play this game</p>
            }
        </div>
    )
}

//FIXME: This props should defeniately not be of type any
const GameScreen = (props: any) => {
    // GameId przychodzi jako argument w url'u
    const GameId = props.match.params.id;
    // Zapytanie do GraphQL o dane dotyczące gry o ID = GameId
    const {loading, error, data} = useQuery(fetchGame, { variables: { id: GameId }});
    return (
        <div>
            <p>Game Info</p>
            { 
                loading ?
                <FadeLoader css={'margin: 0px auto'} color={"#fff"}/> :
                error ? 
                <p>Error: {error}</p> :
                prepareGameInfo(data)
            }
        </div>
    )
}

export default GameScreen;