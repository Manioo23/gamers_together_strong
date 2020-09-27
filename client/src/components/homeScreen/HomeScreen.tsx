import * as React from 'react';
import { useQuery } from 'react-apollo';
import { DotLoader } from 'react-spinners';

import Navbar from '../navbar/Navbar';
import * as style from './HomeScreen.scss';
import Carousel from '../carousel/Carousel';
import fetchGames from '../../queries/fetchGames';
import fetchUsers from '../../queries/fetchUsers';

type HomeScreenProps = {

}

const HomeScreen: React.FC<HomeScreenProps> = (_) => {
	const {loading: loadingGames, error: errorGames, data: dataGames} = useQuery(fetchGames);
	const {loading: loadingUsers, error: errorUsers, data: dataUsers} = useQuery(fetchUsers);

	if(loadingGames || loadingUsers) 
		return <DotLoader />
	else if(errorUsers || errorGames)
		return <p>Error</p>
	else 
		return (
			<div className={style.home}>
				<Navbar />
				<div className={style.homeCarousel}>
					<Carousel urlBase={'/games'} data={dataGames.games.map( (v: {name: string, id: string}) => ( {value: v.name, id: v.id} )) }/>
				</div>
				<div className={style.homeCarousel}>
					<Carousel urlBase={'/users'} data={dataUsers.users.map( (v: {username: string, id: string}) => ( {value: v.username, id: v.id}) )} />
				</div>
				<div className='Stopka'>
					Footer
				</div>
			</div>   
		);
	
}

export default HomeScreen;