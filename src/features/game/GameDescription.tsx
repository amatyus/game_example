import {FC} from 'react'
import {GameTypes} from '../../api/freeToGameApi'

type GameDescriptionProps = {
  game: GameTypes
}

export const GameDescription: FC<GameDescriptionProps> = ({game}) => {
  return (
    <>
      <ul className="games_card_description">
        <li>
          <span>Genre:</span> {game.genre}
        </li>
        <li>
          <span>Platform:</span> {game.platform}
        </li>
        <li>
          <span>Publisher:</span> {game.publisher}
        </li>
        <li>
          <span>Release date:</span>
          {new Date(game.release_date).toLocaleDateString()}
        </li>
        <li>
          <span>Developer:</span> {game.developer}
        </li>
        <li>
          <span>Description:</span> {game.description}
        </li>
      </ul>
    </>
  )
}
