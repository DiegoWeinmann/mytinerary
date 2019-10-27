import React from 'react';
import PropTypes from 'prop-types';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
/* redux */
import { connect } from 'react-redux';
import { searchCities } from 'redux/actions';

const CitiesFilter = props => {
	const handleChange = e => {
		props.searchCities(e.target.value);
	};

	const { search } = props;
	return (
		<Container>
			<Form>
				<FormGroup>
					<Label for='citiesFilter'>Search:</Label>
					<Input
						id='citiesFilter'
						name='city'
						value={search}
						onChange={handleChange}
						autoComplete='off'
					/>
				</FormGroup>
			</Form>
		</Container>
	);
};

CitiesFilter.propTypes = {
	search: PropTypes.string.isRequired,
	searchCities: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	search: state.city.search
});

export default connect(
	mapStateToProps,
	{ searchCities }
)(CitiesFilter);
