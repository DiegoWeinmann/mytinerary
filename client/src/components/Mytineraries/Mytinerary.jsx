import React from 'react';
/* STYLED */
import {
	MtyWrapper,
	MtyFavourite,
	MtyDetailsContainer,
	MtyTitle,
	// MtyImage,
	MtyDetail,
	MtyHashtags
} from 'styled';
import { MdStar } from 'react-icons/md';
/* REACTSTRAP */
import { Container, Row, Col } from 'reactstrap';
// import { BASE_URL } from 'constants/index.js';
/* COMPONENTS */
import ActivityList from 'components/Mytineraries/ActivityList';
/* REDUX */
import { connect } from 'react-redux';
import { addItineraryToUserFavs } from 'redux/actions/user.actions';

class Mytinerary extends React.Component {
	render() {
		const {
			title,
			hashtag,
			rating,
			duration,
			price,
			_id,
			user
		} = this.props;
		const isFavourite =
			user && user.favItineraries.includes(_id) ? 1 : 0;
		return (
			<Container className='mt-3'>
				<MtyWrapper isfavourite={isFavourite}>
					{user && (
						<MtyFavourite
							isfavourite={isFavourite}
							onClick={() => {
								this.props.addItineraryToUserFavs(user._id, _id);
							}}
						>
							<MdStar />
						</MtyFavourite>
					)}
					<Row>
						<Col xs='4'>
							{/* <MtyImage
								src={`${BASE_URL}/images/${profilePic}`}
								alt=''
								className='img-fluid w-75'
							/> */}
						</Col>
						<Col xs='8'>
							<Row>
								<MtyTitle>{title}</MtyTitle>
							</Row>
						</Col>
					</Row>
					<Row>
						<MtyDetailsContainer>
							<MtyDetail center>
								<strong>Likes {rating}</strong>
							</MtyDetail>
							<MtyDetail center>
								{duration} {duration === 1 ? 'hour' : 'hours'}
							</MtyDetail>
							<MtyDetail center>$$ {price}</MtyDetail>
						</MtyDetailsContainer>
					</Row>
					<Row className='mt-3'>
						<MtyHashtags>
							{hashtag && hashtag.map(h => <span key={h}>#{h}</span>)}
						</MtyHashtags>
					</Row>
					<Row>
						<ActivityList itineraryId={_id} />
					</Row>
				</MtyWrapper>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
	isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { addItineraryToUserFavs })(
	Mytinerary
);
