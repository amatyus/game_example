import {
  CategoryField,
  GamesList,
  PlatformField,
  SortByField
} from './../api/freeToGameApi'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {GameListSchema} from './StateSchema'

const initialState: GameListSchema = {
  isLoading: false,
  error: undefined,
  games: null,
  category: 'all',
  platform: 'all',
  'sort-by': 'relevance'
}

const gameslistSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<GamesList>) => {
      state.games = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setCategory: (state, action: PayloadAction<CategoryField>) => {
      state.category = action.payload
    },
    setSort: (state, action: PayloadAction<SortByField>) => {
      state['sort-by'] = action.payload
    },
    setPlatform: (state, action: PayloadAction<PlatformField>) => {
      state.platform = action.payload
    }
  }
})

export const {actions: gamesListActions} = gameslistSlice
export const {reducer: gameslistReducer} = gameslistSlice
