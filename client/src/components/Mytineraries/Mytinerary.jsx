import React from "react";
import axios from "axios";
/* styled */
import { MtyWrapper, MtyTitle, MtyImage, MtyDetail, MtyHashtags } from "styled";
/* reactstrap */
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "constants/index.js";

class Mytinerary extends React.Component {
  async componentDidMount() {
    console.log(this.props);
    try {
      const res = await axios.get(`/activities/${this.props._id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { title, hashtag, profilePic, rating, duration, price } = this.props;
    console.log(this.props);
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
              <Row>{/* <p>{profilePic.split(".")[0]}</p> */}</Row>
            </Col>
            <Col xs="8">
              <Row>
                <MtyTitle>{title}</MtyTitle>
              </Row>
              <Row>
                <Col>
                  <MtyDetail>likes: {rating} </MtyDetail>
                </Col>
                <Col>
                  <MtyDetail> {duration} hours</MtyDetail>
                </Col>
                <Col>
                  <MtyDetail>$$ {price}</MtyDetail>
                </Col>
              </Row>
              <Row className="mt-3">
                <MtyHashtags>
                  {hashtag && hashtag.map(h => <span key={h}>#{h}</span>)}
                </MtyHashtags>
              </Row>
            </Col>
          </Row>
        </MtyWrapper>
      </Container>
    );
  }
}

export default Mytinerary;
