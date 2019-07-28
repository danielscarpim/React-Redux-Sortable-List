import React from "react";
import { connect } from "react-redux";
import Driver from "./Driver";

const mapStateToProps = state => {
  return { drivers: state.drivers };
};

const ConnectedList = ({drivers, dispatch}) => (
  <div>
    <button onClick={() => dispatch({ type: 'RANDOM' })}>Randomize Points</button>

    <ul className="drivers-list">
      {drivers.map((el) => (
        <Driver 
          key={el.id} 
          name={el.name} 
          team={el.team} 
          points={el.points}
        />
      ))}
    </ul>
  </div>
);
const List = connect(mapStateToProps)(ConnectedList);

export default List;