import React from 'react';
import FormInput from 'components/FormElements/FormInput';
import styled from 'styled-components';

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
	password: ''
};

class LoginForm extends React.Component {
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
				<Button type='submit'>Login</Button>
			</FormWrapper>
		);
	}
}

export default LoginForm;
