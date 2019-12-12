import React from 'react';
import { Link } from 'react-router-dom';
/* REACTSTRAP */
import { Container, Row, Col } from 'reactstrap';
/* COMPONENTS */
import Header from 'components/Header/Header';
import Carousel from 'components/Carousel/Carousel';
import arrow from 'imgs/circled-right-2.png';
/* redux*/
import { connect } from 'react-redux';
import {
  setGoogleToken,
  getAuthenticatedUser
} from 'redux/actions/auth.actions';

const LandingPage = props => {
  console.log(props);
  const query = new URLSearchParams(props.location.search);
  const token = query.get('token');
  if (token !== null) {
    localStorage.setItem('token', JSON.stringify(token));
    props.setGoogleToken(token);
    if (!props.user) {
      props.getAuthenticatedUser(props.history);
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }} className='mt-3'>
            <p className='text-center'>
              Find your perfect trip, designed by insiders who know and love
              their cities.
            </p>
          </Col>
          <Col xs={{ size: 6, offset: 3 }}>
            <Link to='cities' className='d-flex justify-content-center '>
              <img src={arrow} alt='arrow' className='img-fluid w-50' />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='display-5'>Popular Mytineraries</p>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {
  setGoogleToken,
  getAuthenticatedUser
})(LandingPage);
