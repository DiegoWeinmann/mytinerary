import React from 'react';
import CreateNewAccountForm from 'components/FormElements/CreateNewAccountForm';
import { Link } from 'react-router-dom';

const CreateNewAccount = () => {
	return (
		<div>
			<h1 className='text-center lead m-3'>Create new account</h1>
			<CreateNewAccountForm />
			<Link to='http://localhost:5000/users/google'>GOOGLE</Link>
		</div>
	);
};

export default CreateNewAccount;
