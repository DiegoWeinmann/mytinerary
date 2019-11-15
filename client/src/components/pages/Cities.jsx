import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
/* reactstrap *********** */
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
/* components */
import CitiesFilter from "components/Cities/CitiesFilter";
/* redux ************* */
import { connect } from "react-redux";
import { getAllCities } from "redux/actions";

class Cities extends React.Component {
  state = {
    filteredCities: []
  };

  updateSearch = search => {
    console.log(this.props.cities);
    console.log(search);
    setTimeout(() => {
      this.setState({
        filteredCities: this.props.cities.filter(city => {
          if (search === "") return true;
          const regExp = new RegExp(`^(${search})+\\w`, "i");
          return regExp.test(city.name);
        })
      });
    }, 1000);
  };

  componentDidMount() {
    this.props.getAllCities();
  }

  renderCities = () => {
    let citiesToRender = this.props.cities;
    if (this.state.filteredCities.length > 0) {
      citiesToRender = this.state.filteredCities;
    }
    return (
      <div className="position-relative" style={{ position: "relative" }}>
        <TransitionGroup component={null}>
          {citiesToRender.map(city => {
            return (
              <CSSTransition
                key={city.name}
                timeout={300}
                classNames="city"
                appear
                unmountOnExit
              >
                <ListGroupItem key={city.name}>
                  <Link
                    to={{
                      pathname: `/cities/${city._id}`,
                      state: { city }
                    }}
                  >
                    {city.name} / {city.country}
                  </Link>
                </ListGroupItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  };

  render() {
    const { isLoaded } = this.props;
    console.log(this.state.filteredCities);
    return (
      <Container>
        <h1 className="text-center">Cities</h1>
        <CitiesFilter updateSearch={this.updateSearch} />
        <Row>
          <Col>
            <ListGroup className="my-2 position-relative">
              {isLoaded ? this.renderCities() : <p>loading...</p>}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  getAllCities: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cities: state.city.cities,
  isLoaded: state.city.isLoaded
});

export default connect(mapStateToProps, { getAllCities })(Cities);
