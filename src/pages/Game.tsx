import {useEffect, useState} from 'react'

import BackButton from '../features/game/BackButton'
import {GameInfo} from '../features/game/GameInfo'
import './pages.css'
import {useParams} from 'react-router-dom'
import {GameTypes, getGame} from '../api/freeToGameApi'
import {GameDescription} from '../features/game/GameDescription'
import {GameCarousel} from '../features/game/GameCarousel'

const Game = () => {
  const {gameId} = useParams()

  const [game, setGame] = useState<GameTypes>()

  const someId = gameId || ''

  useEffect(() => {
    getGame(someId).then((data) => setGame(data))
  }, [gameId])

  return game ? (
    <div className="row_game">
      <GameInfo game={game} />
      <div className="game_descriptoin">
        <BackButton />
        <GameDescription game={game} />
      </div>
      <div className="game_carousel">
        <GameCarousel slides={game.screenshots} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Game
