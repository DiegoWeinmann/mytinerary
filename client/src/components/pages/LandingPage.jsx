import React from 'react';
import { Link } from 'react-router-dom';
/* REACTSTRAP */
import { Container, Row, Col } from 'reactstrap';
/* COMPONENTS */
import Header from 'components/Header/Header';
import Carousel from 'components/Carousel/Carousel';
import arrow from 'imgs/circled-right-2.png';
import home from 'imgs/homeIcon.png';

export const LandingPageFirst = () => {
	return (
		<div>
			<Header />
			<p className='LandingPage__subtitle'>
				Find your perfect trip, designed by insiders who know and love
				their cities.
			</p>
			<div className='LandingPage__browse'>
				<h1> Start browsing </h1>
				<Link className='LandingPage__arrow' to='#!'>
					<img
						src={arrow}
						className='LandingPage__img'
						alt='go to cities page'
					/>
				</Link>
			</div>
			<p className='LandingPage__text'>
				{' '}
				Want to build your own MYtinerary ?{' '}
			</p>
			<Link to='#!' className='LandingPage__link'>
				Log in
			</Link>
			<Link to='#!' className='LandingPage__link'>
				Create Account
			</Link>
			<footer className='LandingPage__footer'>
				<Link to='#!' className='LandingPage__home'>
					<img src={home} alt='' />
				</Link>
			</footer>
		</div>
	);
};

export const LandingPageSecond = () => {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col xs={{ size: 8, offset: 2 }} className='mt-3'>
						<p className='text-center'>
							Find your perfect trip, designed by insiders who know
							and love their cities.
						</p>
					</Col>
					<Col xs={{ size: 6, offset: 3 }}>
						<Link
							to='cities'
							className='d-flex justify-content-center '
						>
							<img
								src={arrow}
								alt='arrow'
								className='img-fluid w-50'
							/>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className='display-5'>Popular Mytineraries</p>
						<Carousel />
					</Col>
				</Row>
			</Container>
		</>
	);
};
