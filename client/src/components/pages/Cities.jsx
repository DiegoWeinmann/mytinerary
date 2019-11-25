import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { colors, shadow } from 'styled';
/* reactstrap *********** */
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
/* components */
import CitiesFilter from 'components/Cities/CitiesFilter';
/* redux ************* */
import { connect } from 'react-redux';
import { getAllCities } from 'redux/actions';

const CitiesWrapper = styled(Container)`
	background: ${colors.secondary[0]};

	h1 {
		padding-top: 1rem;
		color: ${colors.white[0]};
	}
`;
const CitiesListGroup = styled(ListGroup)`
	box-shadow: ${() => shadow('lg')} !important;
`;
const CitiesListGroupItem = styled(ListGroupItem)`
	border: 1px solid ${colors.secondary[1]};
	border-top: none;
	border-bottom: 3px dashed ${colors.secondary[1]} !important;
	text-align: center;

	a {
		text-decoration: none;
		color: ${colors.black[0]} !important;
		font-weight: bold;
	}
`;

class Cities extends React.Component {
	state = {
		filteredCities: []
	};

	updateSearch = search => {
		setTimeout(() => {
			this.setState({
				filteredCities: this.props.cities.filter(city => {
					if (search === '') return true;
					if (search.toLowerCase() === city.name.toLowerCase()) return true;
					const regExp = new RegExp(`^(${search})+\\w`, 'i');
					return regExp.test(city.name);
				})
			});
		}, 1000);
	};

	componentDidMount() {
		this.props.getAllCities();
	}

	renderCities = () => {
		let citiesToRender = this.props.cities;
		if (this.state.filteredCities.length > 0) {
			citiesToRender = this.state.filteredCities;
		}
		return (
			<div className='position-relative' style={{ position: 'relative' }}>
				<TransitionGroup component={null}>
					{citiesToRender.map(city => {
						return (
							<CSSTransition
								key={city.name}
								timeout={300}
								classNames='city'
								appear
								unmountOnExit>
								<CitiesListGroupItem key={city.name}>
									<Link
										to={{
											pathname: `/cities/${city._id}`,
											state: { city }
										}}>
										{city.name} / {city.country}
									</Link>
								</CitiesListGroupItem>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
			</div>
		);
	};

	render() {
		const { isLoaded } = this.props;
		console.log(this.state.filteredCities);
		return (
			<CitiesWrapper>
				<h1 className='text-center'>Cities</h1>
				<CitiesFilter updateSearch={this.updateSearch} />
				<Row>
					<Col>
						<CitiesListGroup className='my-2 position-relative'>
							{isLoaded ? this.renderCities() : <p>loading...</p>}
						</CitiesListGroup>
					</Col>
				</Row>
			</CitiesWrapper>
		);
	}
}

Cities.propTypes = {
	cities: PropTypes.array.isRequired,
	getAllCities: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	cities: state.city.cities,
	isLoaded: state.city.isLoaded
});

export default connect(mapStateToProps, { getAllCities })(Cities);
