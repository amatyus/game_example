import {PayloadAction, createSlice} from '@reduxjs/toolkit'
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
    setGame: (state, action) => {
      state.game = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const {actions: gameActions} = gameSlice
export const {reducer: gameReducer} = gameSlice
