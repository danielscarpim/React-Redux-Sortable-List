export const POINTS_ADD = 'POINTS_ADD'
export const POINTS_SUBTRACT = 'POINTS_SUBTRACT'
export const POINTS_RANDOM = 'POINTS_RANDOM'


export function rateUp(payload) {
  return { type: POINTS_ADD, payload }
}

export function rateDown(payload) {
  return { type: POINTS_SUBTRACT, payload }
}

export function rateRandom(payload) {
  return { type: POINTS_RANDOM, payload }
}