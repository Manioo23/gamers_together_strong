import * as React from 'react';
import { Link} from 'react-router-dom';

import * as style from './Navbar.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<div className={style.navbarWrapper}>
			<div className={style.navbar}>
				<Link to={'/home'} className={style.navbarElement}>
					Home
				</Link>
				<Link to={'/games'} className={style.navbarElement}>
					Games
				</Link>
				<Link to={'/friends'} className={style.navbarElement}>
					Friends
				</Link>
				<Link to={'/profile'} className={style.navbarElement}>
					Profile
				</Link>
				<Link to={'/about'} className={style.navbarElement}>
					About
				</Link>
			</div>
			<div className={style.navbarUserInfo} >
				<div className={style.navbarUserInfoElement}>
					ItsNotMike
				</div>
				<div className={style.navbarUserInfoElement}>
					Rep: 5.0
				</div>
			</div>
		</div>   
	);
}

Navbar.displayName = 'Navbar';
export default Navbar;