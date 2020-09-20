import React from 'react';
import { useQuery } from 'react-apollo';
import FadeLoader from 'react-spinners/FadeLoader'

import fetchUser from '../../queries/fetchUser';
type GameType = {
    name: string,
    id: string
}
type UserType = {
    username: string,
    description: string,
    discordName: string,
    games: Array<GameType>
}

//FIXME: match powinno mieć type z react-router
type UserScreenProps = {
    match: {
        params: {
            id: string
        }
    }
}

const prepareUserDetails = ({user} : {user: UserType}) => {
    //DEBUG: W sumie to już tego nie potrzebuje ale na debugu czasami może rozwiązać problem szybciej
    console.table({...user})
    return (
        <div>
            <p>Name: {user.username}</p>
            <p>About: {user.description}</p>
            <p>Discord Name: {user.discordName}</p>
            <p>Games:
            {
                user.games.length ?
                user.games.map( (v: GameType) => <span key={v.id} style={{fontSize: '0.8em', display: 'block'}}>{v.name}</span>) :
                <p>User doesn't play any game</p>
            }
            </p>
        </div>
    );
} 

const UserScreen: React.FC<UserScreenProps> = (props) => {
    const UserId = props.match.params.id
    const {loading, error, data} = useQuery(fetchUser, { variables: {id: UserId}})

    return (
        <div>
            User Screen
            { 
                loading ?
                <FadeLoader css={'margin: 0px auto'} color={"#fff"}/> :
                error ? 
                //FIXME: To mogłoby być specjalnym komponentem "ErrorComponent" czy cos
                <p style={{color: 'red'}}>Error: {error.message}</p> :
                prepareUserDetails(data)
            }       
        </div>
    );
}

UserScreen.displayName = 'UserScreen';
export default UserScreen;