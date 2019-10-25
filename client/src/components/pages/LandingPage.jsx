import React from 'react';
/* REACTSTRAP */
import { Container, Row, Col } from 'reactstrap';
/* COMPONENTS */
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import Carousel from 'components/Carousel/Carousel';
import arrow from 'imgs/circled-right-2.png';
import home from 'imgs/homeIcon.png';

export const LandingPageFirst = () => {
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

export const LandingPageSecond = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Container>
				<Row>
					<Col xs={{ size: 8, offset: 2 }} className='mt-3'>
						<p className='text-center'>
							Find your perfect trip, designed by insiders who know and love
							their cities.
						</p>
					</Col>
					<Col xs={{ size: 6, offset: 3 }}>
						<a href='#!' className='d-flex justify-content-center '>
							<img src={arrow} alt='arrow' className='img-fluid w-50' />
						</a>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className='display-5'>Popular Mytineraries</h3>
						<Carousel />
					</Col>
				</Row>
			</Container>
		</>
	);
};
