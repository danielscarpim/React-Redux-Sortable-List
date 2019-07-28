import React from "react";

class Driver extends React.Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.team} | {this.props.points}</li>
    );
  }
}

export default Driver;