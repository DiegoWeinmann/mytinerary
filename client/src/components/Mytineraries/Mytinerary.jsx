import React from "react";
/* styled */
import {
  MtyWrapper,
  MtyDetailsContainer,
  MtyTitle,
  MtyImage,
  MtyDetail,
  MtyHashtags
} from "styled";
/* reactstrap */
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "constants/index.js";
/* components */
import ActivityList from "components/Mytineraries/ActivityList";

class Mytinerary extends React.Component {
  render() {
    const {
      title,
      hashtag,
      profilePic,
      rating,
      duration,
      price,
      _id
    } = this.props;
    console.log("itinerary Id" + _id);
    return (
      <Container className="mt-3">
        <MtyWrapper>
          <Row>
            <Col xs="4">
              <Row>
                <MtyImage
                  src={`${BASE_URL}/images/${profilePic}`}
                  alt=""
                  className="img-fluid"
                />
              </Row>
            </Col>
            <Col xs="8">
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
                {duration} {duration === 1 ? "hour" : "hours"}
              </MtyDetail>
              <MtyDetail center>$$ {price}</MtyDetail>
            </MtyDetailsContainer>
          </Row>
          <Row className="mt-3">
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

export default Mytinerary;
