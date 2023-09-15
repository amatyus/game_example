import {StateSchema} from './StateSchema'

export const gamesListSelector = (state: StateSchema) => state.gamesList.games
export const gamesIsLoadingSelector = (state: StateSchema) =>
  state.gamesList.isLoading

export const gameSelector = (state: StateSchema) => state.game.game
export const gameIsLoadingSelector = (state: StateSchema) =>
  state.game.isLoading

export const gamesCategoryFiltersSelector = (state: StateSchema) =>
  state.gamesList.category

export const gamesPlatformFiltersSelector = (state: StateSchema) =>
  state.gamesList.platform

export const gamesSortFiltersSelector = (state: StateSchema) =>
  state.gamesList['sort-by']
