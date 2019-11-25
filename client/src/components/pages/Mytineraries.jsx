import React from "react";
/* react strap */
import { Container, Row, Col } from "reactstrap";
/* redux */
import { connect } from "react-redux";
import { getAllItineraries } from "redux/actions/itinerary.actions";
/* components */
import Mytinerary from "components/Mytineraries/Mytinerary";
import { Title } from "styled";

class Mytineraries extends React.Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getAllItineraries(id);
  }

  render() {
    const { city } = this.props.location.state || "";
    const { itineraries } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <Title className="display-4">{city.name}</Title>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="lead text-center">Available Mytineraries </p>
          </Col>
        </Row>
        <Row className="pb-3">
          {!itineraries ? (
            <p>Loading...</p>
          ) : (
            itineraries.map(itinerary => (
              <Mytinerary key={itinerary._id} {...itinerary} />
            ))
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itinerary.itineraries,
    isLoaded: state.itinerary.isLoaded,
    cities: state.city.cities
  };
};

export default connect(mapStateToProps, { getAllItineraries })(Mytineraries);
