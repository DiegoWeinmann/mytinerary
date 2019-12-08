import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fadeInLeft } from 'styled';

const DropDownWrapper = styled.div`
	width: 50%;
	position: absolute;
	background: ${colors.primary[1]};
	top: 100%;
	left: 0px;
	min-height: 5rem;
	border-radius: 10px;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	animation: ${fadeInLeft} 900ms ease 1;
`;
const DropDownItem = styled.div`
	width: 100%;
	text-decoration: none;

	a {
		color: white;
	}
`;

const DropDownMenu = props => {
	const [isOpen, setOpen] = React.useState(false);
	return (
		<>
			{props.children(setOpen, isOpen)}
			{isOpen && (
				<DropDownWrapper>
					<DropDownItem>
						<Link to="/create-new-account">Create account</Link>
					</DropDownItem>
					<DropDownItem>
						<Link to="/login">Login</Link>
					</DropDownItem>
				</DropDownWrapper>
			)}
		</>
	);
};

export default DropDownMenu;
