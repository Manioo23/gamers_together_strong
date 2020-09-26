import * as React from 'react';
import * as style from './Navbar.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<div className={style.navbarWrapper}>
			<div className={style.navbar}>
				<div className={style.navbarElement}>
					Home
				</div>
				<div className={style.navbarElement}>
					Games
				</div>
				<div className={style.navbarElement}>
					Friends
				</div>
				<div className={style.navbarElement}>
					Profile
				</div>
				<div className={style.navbarElement}>
					About
				</div>
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