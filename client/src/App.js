import React from 'react';
import './App.css';
import arrow from 'imgs/circled-right-2.png';
/* components */
import Header from 'components/Header/Header';

function App() {
	return (
		<div>
			<Header />
			<p className='LandingPage__subtitle'>
				Find your perfect trip, designed by insiders who know and love their
				cities.
			</p>
			<div className='LandingPage__browse'>
				<h1>Start browsing</h1>
				<a className='LandingPage__arrow' href='#!'>
					<img
						src={arrow}
						className='LandingPage__img'
						alt='go to cities page'
					/>
				</a>
			</div>
		</div>
	);
}

export default App;
