import axios from 'axios'

const options = {
  headers: {
    'X-RapidAPI-Key': '2782374a74msh02f757fbc29e99bp1742d6jsna5f2c7dba63c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
}

export type SystemRequirements = {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

export type Screenshots = {
  id: number
  image: string
}

// export type GameFull = {
//   id: number
//   title: string
//   thumbnail: string
//   status: string
//   short_description: string
//   description: string
//   game_url: string
//   genre: string
//   platform: string
//   publisher: string
//   developer: string
//   release_date: string
//   freetogame_profile_url: string
//   minimum_system_requirements: SystemRequirements
//   screenshots: Array<Screenshots>
// }
export interface SystemRequirementsTypes {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

// export interface ScreenshotTypes {
//   id: number
//   image: string
// }

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

export type GamesList = Array<GameTypes>

export async function getGames() {
  try {
    const response = await axios.get(
      'https://free-to-play-games-database.p.rapidapi.com/api/games',
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
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
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      optionsGame
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
