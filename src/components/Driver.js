import React from "react";
import { connect } from 'react-redux'

class Driver extends React.Component {
  render() {
    return (
      <li>
        <button onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
        {this.props.points}
        <button onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
        {this.props.name} - {this.props.team}
      </li>
    );
  }
}

Driver = connect()(Driver)

export default Driver;