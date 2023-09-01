import {useEffect, useState} from 'react'

import BackButton from '../features/game/BackButton'
import {GameCardInfo} from '../features/game/GameInfo'
import './pages.css'
import {useParams} from 'react-router-dom'
import {GameStandalone, getGame} from '../api/freeToGameApi'

const Game = () => {
  const {gameId} = useParams()

  const [game, setGame] = useState<GameStandalone>()
  console.log(game)

  useEffect(() => {
    getGame(gameId).then((data) => setGame(data))
  }, [])

  return (
    <div className="row_game">
      <BackButton />
      <h1>{gameId}</h1>
      <GameCardInfo game={gameId} />
    </div>
  )
}

export default Game
