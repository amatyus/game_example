import axios from 'axios'
import {AppDispatch} from '../storeProvider/store'
import {StateSchema} from '../storeProvider/StateSchema'
import {gamesListActions} from '../storeProvider/gamesListSlice'

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api'

const options = {
  headers: {
    'X-RapidAPI-Key': '2782374a74msh02f757fbc29e99bp1742d6jsna5f2c7dba63c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
}

export type Screenshots = {
  id: number
  image: string
}

export interface SystemRequirementsTypes {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

export interface GameTypes {
  id: number
  title: string
  thumbnail: string
  status: string
  short_description: string
  description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
  minimum_system_requirements: SystemRequirementsTypes
  screenshots: Array<Screenshots>
}

export type PlatformField = 'pc' | 'browser' | 'all'

export type CategoryField =
  | 'mmorpg'
  | 'shooter'
  | 'strategy'
  | 'moba'
  | 'racing'
  | 'sports'
  | 'social'
  | 'sandbox'
  | 'open-world'
  | 'survival'
  | 'pvp'
  | 'pve'
  | 'pixel'
  | 'voxel'
  | 'zombie'
  | 'turn-based'
  | 'first-person'
  | 'third-Person'
  | 'top-down'
  | 'tank'
  | 'space'
  | 'sailing'
  | 'side-scroller'
  | 'superhero'
  | 'permadeath'
  | 'card'
  | 'battle-royale'
  | 'mmo'
  | 'mmofps'
  | 'mmotps'
  | '3d'
  | '2d'
  | 'anime'
  | 'fantasy'
  | 'sci-fi'
  | 'fighting'
  | 'action-rpg'
  | 'action'
  | 'military'
  | 'martial-arts'
  | 'flight'
  | 'low-spec'
  | 'tower-defense'
  | 'horror'
  | 'mmorts'

export type SortByField =
  | 'release-date'
  | 'popularity'
  | 'alphabetical'
  | 'relevance'

export type FiltersProps = {
  platform: PlatformField
  category: CategoryField
  sortBy: SortByField
}

export type GamesList = Array<GameTypes>

export const getGamesList =
  () => async (dispatch: AppDispatch, getState: () => StateSchema) => {
    const state = getState().gamesList
    const platform = state.platform === 'all' ? null : state.platform
    const category = state.category === 'all' ? null : state.category
    const sortBy = state['sort-by']

    const options = {
      method: 'GET',
      url: `${BASE_URL}/games`,
      params: {
        platform: platform,
        category: category,
        'sort-by': sortBy
      },
      headers: {
        'X-RapidAPI-Key': 'fd27cf3a59mshf640d6ca0cba13ep1101ebjsn10e07035b761',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }
    dispatch(gamesListActions.setIsLoading(true))
    try {
      const response = await axios.request(options)
      dispatch(gamesListActions.setGame(response.data))
      dispatch(gamesListActions.setIsLoading(false))
    } catch (error) {
      const errorString = String(error)
      dispatch(gamesListActions.setError(errorString))
      dispatch(gamesListActions.setIsLoading(false))
    }
  }

export async function getGame(param: string) {
  let optionsGame = {
    ...options,
    params: {
      id: param
    }
  }
  try {
    const response = await axios.get(`${BASE_URL}/game`, optionsGame)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
