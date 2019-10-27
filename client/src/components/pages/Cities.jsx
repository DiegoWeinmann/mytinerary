import React from 'react';
import axios from 'axios';
import {
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
/* Redux */
import { connect } from 'react-redux';
import { getAllCities } from 'redux/actions';

class Cities extends React.Component {
	state = {
		isLoaded: true,
		cities: []
	};

	componentDidMount() {
		// try {
		// 	this.setState({ isLoaded: false });
		// 	const res = await axios.get('/cities/all');
		// 	console.log(res.data);
		// 	this.setState({
		// 		cities: res.data,
		// 		isLoaded: true
		// 	});
		// } catch (error) {
		// 	console.log(error);
		// }
		this.props.getAllCities();
		this.setState({ cities: this.props.cities });
	}
	render() {
		console.log(this.props);
		const { isLoaded, cities } = this.state;
		return (
			<Container>
				<h1 className='text-center'>Cities</h1>
				<Row>
					<Col>
						<ListGroup className='my-2'>
							{this.props.cities && isLoaded ? (
								this.props.cities.map((city, i) => (
									<ListGroupItem key={i + city.name}>
										{city.name} - {city.country}
									</ListGroupItem>
								))
							) : (
								<h1>loading</h1>
							)}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	cities: state.cities.cities
});
export default connect(
	mapStateToProps,
	{ getAllCities }
)(Cities);
