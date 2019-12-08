import React from 'react';
import CreateNewAccountForm from 'components/FormElements/CreateNewAccountForm';

const CreateNewAccount = () => {
	return (
		<div>
			<h1 className='text-center lead m-3'>Create new account</h1>
			<CreateNewAccountForm />
		</div>
	);
};

export default CreateNewAccount;
