import React from "react";
import { connect } from 'react-redux'

class Driver extends React.Component {
  render() {
    return (
      <li className="drivers-list__item">
        <div className="column column--points">
          <button className="button" value={this.props.id} onClick={(e) => this.props.decrement(e.target.value)}>-</button>
          <span className="points">{this.props.points}</span>
          <button className="button" value={this.props.id} onClick={(e) => this.props.increment(e.target.value)}>+</button>
        </div>
        <div className="column column--name">{this.props.name}</div>
        <div className="column column--team">{this.props.team}</div>
      </li>
    );
  }
}

Driver = connect()(Driver)

export default Driver;