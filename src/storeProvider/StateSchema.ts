import {GameTypes} from '../api/freeToGameApi'

export interface StateSchema {
  gamesList: GameListSchema
  game: GameSchema
}

export interface GameSchema {
  isLoading: boolean
  error: string | undefined
  game: GameTypes | null
}

export interface GameListSchema {
  error: string | undefined
  isLoading: boolean
  games: GameTypes[] | null
}
