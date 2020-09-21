import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import {history} from '../../store/store'

import FadeLoader from 'react-spinners/FadeLoader';
import newGameQuery from '../../queries/newGame';
import fetchGenresQuery from '../../queries/fetchGenres';

// Formularz dodawania nowej gry do bazy danych
// W sumie nie potrzebny z poziomu użytkownika ale może kiedyś się przyda 

const NewGame: React.FC = () => {
    const [name, setName] = React.useState("");
    const [genreId, setGenreId] = React.useState(""); 
    const [description, setDescription] = React.useState("");
    const [addGame, ] = useMutation(newGameQuery);
    const {loading, error, data} = useQuery(fetchGenresQuery);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        addGame({
            variables: {
                name,
                description,
                genreId
            }
        })
        .then(() => history.push('/home'))
        .catch(e => console.log(e))
    } 


    if(loading) 
        return <FadeLoader css={'margin: 0px auto'} color={"#fff"}/>;
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
                    
                    { data.genres.map((v: {name: string, id: string}) => <option value={v.id} key={v.id}>[ {v.name} ]</option>) }
                </select>
                <input type='submit' value='Submit' />
            </form>
        );
}

NewGame.displayName = 'NewGame';
export default NewGame;