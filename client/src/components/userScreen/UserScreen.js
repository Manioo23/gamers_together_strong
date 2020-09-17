import React from 'react';
import { useQuery } from 'react-apollo';
import FadeLoader from 'react-spinners/FadeLoader'

import fetchUser from '../../queries/fetchUser';

const prepareUserDetails = ({user}) => {
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
                user.games.map( (v, i) => <span key={i} style={{fontSize: '0.8em', display: 'block'}}>{v.name}</span>) :
                <p>User doesn't play any game</p>
            }
            </p>
        </div>
    );
} 

const UserScreen = (props) => {
    const UserId = props.match.params.id
    const {loading, error, data} = useQuery(fetchUser, { variables: {id: UserId}})

    return (
        <div>
            User Screen
            { 
                loading ?
                <FadeLoader css={{margin: '0px auto'}} color={"#fff"}/> :
                error ? 
                //FIXME: To mogłoby być specjalnym komponentem "ErrorComponent" czy cos
                <p style={{color: 'red'}}>Error: {error.message}</p> :
                prepareUserDetails(data)
            }       
        </div>
    );
}

export default UserScreen;