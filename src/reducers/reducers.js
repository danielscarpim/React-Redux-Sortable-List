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

function sortArray(array) {
  return array.slice().sort((a, b) => {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    return 0;
  })
}

function updateState(state, id, type) {
  // Maximun number of points possible in 2019 season: 
  // 25 points per victory * 21 races + 21 points for fastest lap
  const maxPoints = 546;
  const newState = Object.assign({}, state);
  const newDrivers = newState.drivers.map((driver, index) => {
    if (type === 'RANDOM') {
      driver.points = Math.floor(Math.random() * Math.floor(maxPoints));
    }

    if (type === 'RESET') {
      driver.points = 0;
    }

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

  newState.drivers = sortArray(newDrivers);

  return newState;
}

function rootReducer(state = initialState, action) {
  const driverId = Number(action.payload);

  return Object.assign({}, updateState(state, driverId, action.type));
};

export default rootReducer;