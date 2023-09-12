import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema'
import {gameslistReducer} from './gamesListSlice'
import {gameReducer} from './gameSlice'
import {useDispatch} from 'react-redux'

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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
