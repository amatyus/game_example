import {FC, useEffect, useState} from 'react'
import {GameStandalone, GamesList, getGame} from '../../api/freeToGameApi'

type GameProps = {
  game: GameStandalone
}

export const GameCardInfo: FC<GameProps> = ({game}) => {
  //   const [game, setGame] = useState<GamesList>([])
  console.log(game)

  //   useEffect(() => {
  //     getGame(gameId).then((data) => setGame(data))
  //   }, [game])

  return null
}
