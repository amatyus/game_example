import {createSlice} from '@reduxjs/toolkit'
import {GameListSchema} from './StateSchema'

const initialState: GameListSchema = {
  isLoading: false,
  error: undefined,
  games: null
}

const gameslistSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.games = action.payload
    }
  }
})

export const {actions: gamesListActions} = gameslistSlice
export const {reducer: gameslistReducer} = gameslistSlice
