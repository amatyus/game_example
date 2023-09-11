import {createSlice} from '@reduxjs/toolkit'
import {GameSchema} from './StateSchema'

const initialState: GameSchema = {
  isLoading: false,
  error: undefined,
  game: null
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.game = action.payload
    }
  }
})

export const {actions: gameActions} = gameSlice
export const {reducer: gameReducer} = gameSlice
