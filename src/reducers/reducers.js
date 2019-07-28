const initialState = {
  drivers: [
    { name: "Sebastian Vettel", team: 'Ferrari', id: 1, points: 0 },
    { name: "Charles Leclerc", team: 'Ferrari', id: 2, points: 0 },
    { name: "Lewis Hamilton", team: 'Mercedes', id: 3, points: 0 },
    { name: "Valtteri Bottas", team: 'Mercedes', id: 4, points: 0 },
    { name: "Max Verstappen", team: 'Red Bull', id: 5, points: 0 },
    { name: "Pierre Gasly", team: 'Red Bull', id: 6, points: 0 },
    { name: "Carlos Sainz", team: 'McLaren', id: 7, points: 0 },
    { name: "Lando Norris", team: 'McLaren', id: 8, points: 0 },
    { name: "Daniel Ricciardo", team: 'Renault', id: 9, points: 0 },
    { name: "Nico Hülkenberg", team: 'Renault', id: 10, points: 0 },
    { name: "Kimi Räikkönen", team: 'Alfa Romeo Racing', id: 11, points: 0 },
    { name: "Antonio Giovinazzi", team: 'Alfa Romeo Racing', id: 12, points: 0 },
    { name: "Romain Grosjean", team: 'Haas', id: 13, points: 0 },
    { name: "Kevin Magnussen", team: 'Haas', id: 14, points: 0 },
    { name: "Sergio Pérez", team: 'Racing Point', id: 15, points: 0 },
    { name: "Lance Stroll", team: 'Racing Point', id: 16, points: 0 },
    { name: "Daniil Kvyat", team: 'Toro Rosso', id: 17, points: 0 },
    { name: "Alex Albon", team: 'Toro Rosso', id: 18, points: 0 },
    { name: "George Russell", team: 'Williams', id: 19, points: 0 },
    { name: "Robert Kubica", team: 'Williams', id: 20, points: 0 }
  ]
};

function updateState(state, id, type) {
  const newState = Object.assign({}, state);
  const newDrivers = newState.drivers.map((driver, index) => {
    if (driver.id === Number(id)) {
      if (type === 'INCREMENT') {
        driver.points++;
      }
      if ((type === 'DECREMENT') && (driver.points >= 1)) {
        driver.points--;
      }
      return driver;
    }
    return driver;
  });

  newState.drivers = newDrivers;

  return newState;
}

function rootReducer(state = initialState, action) {
  const driverId = Number(action.payload);

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, updateState(state, driverId, action.type));
    case 'DECREMENT':
      return Object.assign({}, updateState(state, driverId, action.type));
    case 'RANDOM':
      console.log('random');
      return Object.assign({}, state, {
      })
    default:
      return state
  }
};

export default rootReducer;