import {StateSchema} from './StateSchema'

export const gamesListSelector = (state: StateSchema) => state.gamesList.games
export const gamesIsLoadingSelector = (state: StateSchema) =>
  state.gamesList.isLoading
