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
/* Redux ************* */
import { connect } from 'react-redux';
import { getAllCities } from 'redux/actions';

class Cities extends React.Component {
	componentDidMount() {
		this.props.getAllCities();
	}

	render() {
		const { cities, isLoaded } = this.props;
		console.log(isLoaded);
		return (
			<Container>
				<h1 className='text-center'>Cities</h1>
				<Row>
					<Col>
						<ListGroup className='my-2'>
							{isLoaded ? (
								cities.map((city, i) => (
									<ListGroupItem key={i + city.name}>
										{city.name} - {city.country}
									</ListGroupItem>
								))
							) : (
								<p>loading...</p>
							)}
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
	isLoaded: state.city.isLoaded
});

export default connect(
	mapStateToProps,
	{ getAllCities }
)(Cities);
