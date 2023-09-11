import {FC} from 'react'

import {GameTypes} from '../../api/freeToGameApi'
import GameSystemRequirements from './GameSystemRequirements'

type GameProps = {
  game: GameTypes
}

export const GameCardInfo: FC<GameProps> = ({game}) => {
  const isAvailableRequirements = Boolean(game.minimum_system_requirements)
  return (
    <>
      <div className="games_card">
        <div>
          <img alt={game.title} src={game.thumbnail} />
        </div>
        <div className="games_card_info">
          {isAvailableRequirements ? (
            <h2>Minimum System Requirements</h2>
          ) : (
            game.title
          )}
          {isAvailableRequirements ? (
            <GameSystemRequirements
              requirements={game.minimum_system_requirements}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
