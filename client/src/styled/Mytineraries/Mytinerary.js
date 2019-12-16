import styled from 'styled-components';
import { shadow } from 'styled';
import { colors, grow } from '../helpers';
import { Container } from 'reactstrap';

export const MtyWrapper = styled(Container)`
	position: relative;
	width: 100%;
	min-height: 20vh;
	background: ${props =>
		props.isfavourite ? colors.success[0] : colors.white[0]};
	transition: background 600ms ease-in-out;
	padding: 1rem 0.75rem 0 0.75rem;
	box-shadow: ${() => shadow('lg')};
	border-radius: 5px;
	overflow: hidden;
`;

export const MtyFavourite = styled.span`
	position: absolute;
	top: 5px;
	left: 5px;
	font-size: 1.75rem;
	color: ${props =>
		props.isfavourite ? colors.success[1] : 'black'};
	transition: all 600ms ease-in-out;
	animation: ${props => (props.isfavourite ? grow : 'none')} 400ms
		ease;
	z-index: 1;
`;

export const MtyTitle = styled.div`
	width: 100%;
	min-height: 3.5rem;
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	text-align: right;
	border-bottom: 3px dotted ${colors.secondary[1]};

	display: flex;
	align-items: center;
`;

export const MtyImage = styled.img`
	min-width: 3rem;
	height: 3rem;
	border-radius: 50%;
`;

export const MtyDetailsContainer = styled.div`
	margin: 1rem 0 0 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const MtyDetail = styled.div`
	font-size: 0.8rem;
	text-align: ${props => (props.center ? 'center' : 'left')};
	margin-left: 0.25rem;
`;

export const MtyHashtags = styled.span`
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		margin-left: 0.5rem;
		padding: 0.25rem;
		font-size: 0.75rem;
		background: ${colors.accent[1]};
		color: ${colors.white[2]};
		box-shadow: ${() => shadow('sm')};
		border-radius: 5px;
	}
`;

export const ActivitiesToggler = styled.button`
	width: 100%;
	height: 2rem;
	margin: 1rem 0 0 0;
	display: block;
	font-style: italic;
	color: white;
	border: none;
	background: linear-gradient(
		${colors.accent[0]},
		${colors.accent[2]}
	);
`;
