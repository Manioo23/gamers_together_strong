import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import {history} from '../../store'

import FadeLoader from 'react-spinners/FadeLoader';
import newGameQuery from '../../queries/newGame';
import fetchGenresQuery from '../../queries/fetchGenres';

const NewGame = (props) => {

    const [name, setName] = useState("");
    const [genreId, setGenreId] = useState("");
    const [description, setDescription] = useState("");
    const [addGame, ] = useMutation(newGameQuery);
    const {loading, error, data} = useQuery(fetchGenresQuery);

    const onSubmitHandler = (event) => {
        event.preventDefault()

        addGame({
            variables: {
                name,
                description,
                genreId
            }
        }).then(
            history.push('/home')
        ).catch(e => console.log(e))
    } 


    if(loading) 
        return <FadeLoader css={{margin: '0px auto'}} color={"#fff"}/>;
    else if (error) 
        return <p>{error}</p>
    else 
        return (
            <form onSubmit={onSubmitHandler} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <label style={{color: 'white'}}>Enter new game:</label>
                <input 
                    placeholder='Name'
                    name='Name'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input 
                    placeholder='Description'
                    name='Description'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
                <select 
                    name="Genre" 
                    onChange={e => setGenreId(e.target.value)}
                    value={genreId}
                >
                    
                    { data.genres.map((v, i) => <option value={v.id} key={i}>[ {v.name} ]</option>) }
                </select>
                <input type='submit' value='Submit' />
            </form>
        );
}

export default NewGame;