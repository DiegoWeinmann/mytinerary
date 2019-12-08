import React from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class CitiesFilter extends React.Component {
	state = {
		search: ''
	};

	handleChange = e => {
		this.setState({
			search: e.target.value
		});
		this.props.updateSearch(e.target.value);
	};

	render() {
		return (
			<Container>
				<Form>
					<FormGroup>
						<Input
							id="citiesFilter"
							name="city"
							value={this.state.search}
							onChange={this.handleChange}
							autoComplete="off"
							placeholder="search..."
						/>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}

CitiesFilter.propTypes = {
	updateSearch: PropTypes.func.isRequired
};

export default CitiesFilter;
