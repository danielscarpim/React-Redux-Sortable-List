import React from "react";
import { connect } from 'react-redux'

class Driver extends React.Component {
  render() {
    return (
      <li>
      {this.props.name} - {this.props.team}
        <button onClick={() => this.props.dispatch({ type: 'POINTS_SUBTRACT' })}>-</button>
        {this.props.points}
        <button onClick={() => this.props.dispatch({ type: 'POINTS_ADD' })}>+</button>
      </li>
    );
  }
}

Driver = connect()(Driver)

export default Driver;