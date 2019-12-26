import React, { Component } from "react";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <label>Is going:</label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Number of gurests:</label>
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default Reservation;
