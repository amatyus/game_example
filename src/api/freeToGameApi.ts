import axios from 'axios'

const options = {
  headers: {
    'X-RapidAPI-Key': '2782374a74msh02f757fbc29e99bp1742d6jsna5f2c7dba63c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
}

export type GameStandalone = {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}

export type GamesList = Array<GameStandalone>

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

export async function getGame(params: {[key: string]: string}) {
  try {
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games ${params}`,
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
