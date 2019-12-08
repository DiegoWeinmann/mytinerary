import React from 'react';
import styled from 'styled-components';

import LoginForm from 'components/FormElements/LoginForm';

const LoginPageWrapper = styled.div`
	width: 100%;
`;

const Login = () => {
	return (
		<LoginPageWrapper>
			<h1 className='text-center lead my-3'>Login</h1>
			<LoginForm />
		</LoginPageWrapper>
	);
};

export default Login;
