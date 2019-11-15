import React from "react";
/* styled */
import { MtyWrapper, MtyTitle, MtyImage, MtyDetail } from "styled";
/* reactstrap */
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "constants/index.js";

class Mytinerary extends React.Component {
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
              <Row>
                <p className="text-center w-100">{profilePic.split(".")[0]}</p>
              </Row>
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
                {hashtag &&
                  hashtag.map(h => (
                    <Col xs="4" key={h}>
                      <MtyDetail center>#{h}</MtyDetail>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </MtyWrapper>
      </Container>
    );
  }
}

export default Mytinerary;
