export const RATE_UP = 'RATE_UP'
export const RATE_DOWN = 'RATE_DOWN'
export const RATE_RANDOM = 'RATE_RANDOM'


export function rateUp(payload) {
  return { type: RATE_UP, payload }
}

export function rateDown(payload) {
  return { type: RATE_DOWN, payload }
}

export function rateRandom(payload) {
  return { type: RATE_RANDOM, payload }
}