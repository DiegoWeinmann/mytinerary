import React from 'react';
/* COMPONENTS */
import Header from 'components/Header/Header';
import arrow from 'imgs/circled-right-2.png';
import home from 'imgs/homeIcon.png';

const LandingPage = () => {
	return (
		<div>
			<Header />
			<p className='LandingPage__subtitle'>
				Find your perfect trip, designed by insiders who know and love their
				cities.
			</p>
			<div className='LandingPage__browse'>
				<h1> Start browsing </h1>
				<a className='LandingPage__arrow' href='#!'>
					<img
						src={arrow}
						className='LandingPage__img'
						alt='go to cities page'
					/>
				</a>
			</div>
			<p className='LandingPage__text'> Want to build your own MYtinerary ? </p>
			<a href='#!' className='LandingPage__link'>
				Log in
			</a>
			<a href='#!' className='LandingPage__link'>
				Create Account
			</a>
			<footer className='LandingPage__footer'>
				<a href='#!' className='LandingPage__home'>
					<img src={home} alt='' />
				</a>
			</footer>
		</div>
	);
};

export default LandingPage;
