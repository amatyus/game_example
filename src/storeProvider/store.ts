import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema'
import {gameslistReducer} from './gamesListSlice'
import {gameReducer} from './gameSlice'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer = combineReducers({
    game: gameReducer,
    gamesList: gameslistReducer
  })

  const store = configureStore({
    preloadedState: initialState,
    reducer: rootReducer
  })

  return store
}
