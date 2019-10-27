import React from 'react';
import axios from 'axios';
import {
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

class Cities extends React.Component {
	state = {
		isLoaded: true,
		cities: []
	};
	async componentDidMount() {
		try {
			this.setState({ isLoaded: false });
			const res = await axios.get('/cities/all');
			console.log(res.data);
			this.setState({
				cities: res.data,
				isLoaded: true
			});
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		const { isLoaded, cities } = this.state;
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
								<h1>loading</h1>
							)}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Cities;
