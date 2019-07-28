import {
  RATE_UP,
  RATE_DOWN,
  RATE_RANDOM,
} from '../actions/actions'

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
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RATE_UP:
      return Object.assign({}, state, {
      })
    case RATE_DOWN:
      return Object.assign({}, state, {
      })
    case RATE_RANDOM:
      return Object.assign({}, state, {
      })
    default:
      return state
  }
};

export default rootReducer;