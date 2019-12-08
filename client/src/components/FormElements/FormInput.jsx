import React from 'react';
import styled from 'styled-components';
import { FormGroup, Label, Input } from 'reactstrap';

const FormInputGroup = styled(FormGroup)`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const FormLabel = styled(Label)`
	font-size: 0.75rem;
	text-align: center;
	text-transform: capitalize;
`;

const FormInput = styled(Input)`
	border: none !important;
	border-bottom: 1px solid #aaa !important;
	border-radius: 0px !important;
`;

const CustomInput = props => {
	return (
		<FormInputGroup>
			<FormLabel>{props.label}</FormLabel>
			<FormInput
				type={props.type}
				value={props.value}
				onChange={props.onChange}
				name={props.name}
			/>
		</FormInputGroup>
	);
};

export default CustomInput;
