import React from "react";
import { connect } from 'react-redux'

class Driver extends React.Component {
  render() {
    return (
      <li>
        <button value={this.props.id} onClick={(e) => this.props.decrement(e.target.value)}>-</button>
        {this.props.points}
        <button value={this.props.id} onClick={(e) => this.props.increment(e.target.value)}>+</button>
        {this.props.name} - {this.props.team}
      </li>
    );
  }
}

Driver = connect()(Driver)

export default Driver;