import React from "react";
import axios from "axios";

class Mytineraries extends React.Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const { data } = await axios.get(`/cities/${id}/mytineraries/all`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Mytineraries</h1>
      </div>
    );
  }
}

export default Mytineraries;
