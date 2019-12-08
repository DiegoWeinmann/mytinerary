import React from 'react';
import styled, { keyframes } from 'styled-components';
/* components */
import ActivityItem from 'components/Mytineraries/ActivityItem';
import { ActivitiesToggler } from 'styled';
/* redux */
import { connect } from 'react-redux';
import { getAllActivities } from 'redux/actions/activity.actions';

const grow = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 4rem;
  }
`;

const ActListWrapper = styled.div`
	width: 100%;
	display: flex;
	overflow: scroll;
	scroll-snap-type: x mandatory;
	animation: 200ms ${grow} ease;
`;

class ActivityList extends React.Component {
	state = {
		show: false
	};

	toggleActivities = () => {
		this.props.getAllActivities(this.props.itineraryId);
		setTimeout(() => {
			this.setState({
				show: !this.state.show
			});
		}, 500);
	};

	render() {
		return (
			<>
				<ActivitiesToggler onClick={this.toggleActivities}>
					Show Activities
				</ActivitiesToggler>
				{this.state.show && (
					<ActListWrapper>
						{this.props.activities[this.props.itineraryId] &&
							this.props.activities[this.props.itineraryId]
								.isLoaded &&
							this.props.activities[
								this.props.itineraryId
							].activities.map(activity => (
								<ActivityItem key={activity._id} {...activity} />
							))}
					</ActListWrapper>
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({
	activities: state.activity.activities,
	isLoaded: state.activity.isLoaded
});

export default connect(mapStateToProps, { getAllActivities })(
	ActivityList
);
