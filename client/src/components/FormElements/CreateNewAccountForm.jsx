import React from 'react';
import FormInput from 'components/FormElements/FormInput';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
/* redux */
import { connect } from 'react-redux';
import { register } from 'redux/actions/user.actions';

const FormWrapper = styled.form`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	width: 50%;
	margin: 1rem auto 0 auto;
	padding: 0.5rem;
	border: none;
	border-radius: 10px;
`;

const initialState = {
	email: '',
	password: '',
	profilePic: '',
	firstName: '',
	lastName: ''
};

class CreateNewAccountForm extends React.Component {
	state = {
		...initialState
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		if (this.state.email !== '' && this.state.password !== '') {
			this.props.register(this.state, this.props.history);
			this.setState({ ...initialState });
		}
	};

	render() {
		return (
			<FormWrapper onSubmit={this.handleSubmit}>
				<FormInput
					label='email'
					type='email'
					value={this.state.email}
					onChange={this.handleChange}
					name='email'
				/>
				<FormInput
					label='password'
					type='password'
					value={this.state.password}
					onChange={this.handleChange}
					name='password'
				/>
				<FormInput
					label='profile picture'
					type='text'
					value={this.state.profilePic}
					onChange={this.handleChange}
					name='profilePic'
				/>
				<FormInput
					label='first name'
					type='text'
					value={this.state.firstName}
					onChange={this.handleChange}
					name='firstName'
				/>
				<FormInput
					label='last name'
					type='text'
					value={this.state.lastName}
					onChange={this.handleChange}
					name='lastName'
				/>
				<Button type='submit'>Create</Button>
			</FormWrapper>
		);
	}
}

export default connect(null, { register })(
	withRouter(CreateNewAccountForm)
);
