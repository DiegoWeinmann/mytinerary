import React from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
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
						<Label for='citiesFilter'>Search:</Label>
						<Input
							id='citiesFilter'
							name='city'
							value={this.state.search}
							onChange={this.handleChange}
							autoComplete='off'
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
