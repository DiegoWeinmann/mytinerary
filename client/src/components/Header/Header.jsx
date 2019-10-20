import React from 'react';
import logo from 'imgs/MYtineraryLogo.png';
import './Header.css';

const Header = () => {
	return (
		<header className='Header'>
			<img src={logo} className="Header__logo" alt='MYtinerary logo' />
		</header>
	);
};

export default Header;
