import {StateSchema} from './StateSchema'

export const gamesListSelector = (state: StateSchema) => state.gamesList.games
export const gamesIsLoadingSelector = (state: StateSchema) =>
  state.gamesList.isLoading

export const gameSelector = (state: StateSchema) => state.game.game
export const gameIsLoadingSelector = (state: StateSchema) =>
  state.game.isLoading
