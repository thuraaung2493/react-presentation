import React, { Component } from "react";

const WarningBanner = ({ warn }) => {
  // if (!warn) {
  //   return null;
  // }

  // return <div className="warning">Warning!</div>;
  return warn && <div className="warning">Warning!</div>;
};

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: true
    };
  }

  handleToggleClick = () => {
    this.setState({
      showWarning: !this.state.showWarning
    });
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Page;
