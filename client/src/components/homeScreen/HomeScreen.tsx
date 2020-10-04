import * as React from 'react';
import { useQuery } from 'react-apollo';
import { DotLoader } from 'react-spinners';

import * as style from './HomeScreen.scss';
import Carousel from '../carousel/Carousel';
import fetchGames from '../../queries/fetchGames';
import fetchUsers from '../../queries/fetchUsers';
import { GameType, UserType } from '../../types';

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
				<div className={style.homeCarousel}>
					<Carousel urlBase={'/games'} data={dataGames.games.map( (v: GameType) => ( {value: v.name, id: v.id, imgUrl: v.imgUrl} )) }/>
				</div>
				<div className={style.homeCarousel}>
					<Carousel urlBase={'/users'} data={dataUsers.users.map( (v: UserType) => ( {value: v.username, id: v.id, imgUrl: v.imgUrl}) )} />
				</div>
				<div className='Stopka'>
					Footer
				</div>
			</div>   
		);
	
}

export default HomeScreen;