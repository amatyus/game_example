import {FC} from 'react'
import {GameTypes} from '../../api/freeToGameApi'
import {GameCardInfo} from './GameCardInfo'

type GameProps = {
  game: GameTypes
}

export const GameInfo: FC<GameProps> = ({game}) => {
  return <GameCardInfo game={game} />
}
