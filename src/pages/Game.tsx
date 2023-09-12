import {useEffect, useState} from 'react'

import BackButton from '../features/game/BackButton'
import {GameInfo} from '../features/game/GameInfo'
import './pages.css'
import {useParams} from 'react-router-dom'
import {GameTypes, getGame} from '../api/freeToGameApi'
import {GameDescription} from '../features/game/GameDescription'
import {GameCarousel} from '../features/game/GameCarousel'
import {useSelector} from 'react-redux'
import {
  gameIsLoadingSelector,
  gameSelector
} from '../storeProvider/gamesSelectors'
import {useAppDispatch} from '../storeProvider/store'

const Game = () => {
  const {gameId} = useParams()
  const dispatch = useAppDispatch()

  const game = useSelector(gameSelector)
  const isLoading = useSelector(gameIsLoadingSelector)

  const someId = gameId || ''

  useEffect(() => {
    dispatch(getGame(someId))
  }, [])

  if (isLoading) {
    return <div>"Loading"</div>
  }

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
