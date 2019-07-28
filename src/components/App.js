import React, { Component } from "react";
import Driver from './Driver';

class f1Drivers extends Component {
  constructor() {
    super();
    this.state = {
      drivers: [
        { name: "Sebastian Vettel", team: 'Ferrari', id: 1, rating: 0 },
        { name: "Charles Leclerc", team: 'Ferrari', id: 2, rating: 0 },
        { name: "Lewis Hamilton", team: 'Mercedes', id: 3, rating: 0 },
        { name: "Valtteri Bottas", team: 'Mercedes', id: 4, rating: 0 },
        { name: "Max Verstappen", team: 'Red Bull', id: 5, rating: 0 },
        { name: "Pierre Gasly", team: 'Red Bull', id: 6, rating: 0 },
        { name: "Carlos Sainz", team: 'McLaren', id: 7, rating: 0 },
        { name: "Lando Norris", team: 'McLaren', id: 8, rating: 0 },
        { name: "Daniel Ricciardo", team: 'Renault', id: 9, rating: 0 },
        { name: "Nico Hülkenberg", team: 'Renault', id: 10, rating: 0 },
        { name: "Kimi Räikkönen", team: 'Alfa Romeo Racing', id: 11, rating: 0 },
        { name: "Antonio Giovinazzi", team: 'Alfa Romeo Racing', id: 12, rating: 0 },
        { name: "Romain Grosjean", team: 'Haas', id: 13, rating: 0 },
        { name: "Kevin Magnussen", team: 'Haas', id: 14, rating: 0 },
        { name: "Sergio Pérez", team: 'Racing Point', id: 15, rating: 0 },
        { name: "Lance Stroll", team: 'Racing Point', id: 16, rating: 0 },
        { name: "Daniil Kvyat", team: 'Toro Rosso', id: 17, rating: 0 },
        { name: "Alex Albon", team: 'Toro Rosso', id: 18, rating: 0 },
        { name: "George Russell", team: 'Williams', id: 19, rating: 0 },
        { name: "Robert Kubica", team: 'Williams', id: 20, rating: 0 }
      ]
    };
  }
  render() {
    return this.state.drivers.map((el) => {
      return <Driver key={el.id} name={el.name} team={el.team} id={el.id} rating={el.rating} />;
    })
  };
}

export default f1Drivers;