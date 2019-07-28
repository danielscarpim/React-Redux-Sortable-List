import React from "react";
import { connect } from "react-redux";
import Driver from "./Driver";

const mapStateToProps = state => {
  return { drivers: state.drivers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (el) => dispatch({ type: 'INCREMENT', payload: el}),
    decrement: (el) => dispatch({ type: 'DECREMENT', payload: el}),
    random: (el) => dispatch({ type: 'RANDOM', payload: el}),
    reset: (el) => dispatch({ type: 'RESET', payload: el })
  }
}

const ConnectedList = ({drivers, random, reset, increment, decrement}) => (
  <div>
    <div className="header__buttons">
      <button className="button" onClick={random}>Randomize Points</button>
      <button className="button" onClick={reset}>Reset</button>
    </div>

    <ul className="drivers-list">
      {drivers.map((el) => (
        <Driver 
          key={el.id}
          id={el.id}
          name={el.name} 
          team={el.team} 
          points={el.points}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </ul>
  </div>
);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;