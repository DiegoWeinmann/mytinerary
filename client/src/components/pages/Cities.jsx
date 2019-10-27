import React from 'react';
import PropTypes from 'prop-types';
/* reactstrap *********** */
import {
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
/* components */
import CitiesFilter from 'components/Cities/CitiesFilter';
/* redux ************* */
import { connect } from 'react-redux';
import { getAllCities } from 'redux/actions';

class Cities extends React.Component {
	componentDidMount() {
		this.props.getAllCities();
	}

	renderCities = () => {
		const { cities, filteredCities, search } = this.props;
		let citiesToRender;
		if (filteredCities.length === 0 && search === '') {
			citiesToRender = cities;
		} else if (filteredCities.length === 0 && search !== '') {
			return (
				<Container>
					<p className='text-center lead'>No matches found</p>
				</Container>
			);
		} else {
			citiesToRender = filteredCities;
		}
		return citiesToRender.map((city, i) => {
			return (
				<ListGroupItem key={i}>
					{city.name} / {city.country}
				</ListGroupItem>
			);
		});
	};

	render() {
		const { isLoaded } = this.props;
		return (
			<Container>
				<h1 className='text-center'>Cities</h1>
				<CitiesFilter />
				<Row>
					<Col>
						<ListGroup className='my-2'>
							{isLoaded ? this.renderCities() : <p>loading...</p>}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

Cities.propTypes = {
	cities: PropTypes.array.isRequired,
	getAllCities: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	cities: state.city.cities,
	filteredCities: state.city.filteredCities,
	search: state.city.search,
	isLoaded: state.city.isLoaded
});

export default connect(
	mapStateToProps,
	{ getAllCities }
)(Cities);
