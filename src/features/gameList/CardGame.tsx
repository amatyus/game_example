import {FC} from 'react'
import {Link} from 'react-router-dom'
import {GameStandalone} from '../../api/freeToGameApi'

type GameCard = {
  game: GameStandalone
}
export const CardGame: FC<GameCard> = ({game}) => {
  const gamePath = game.id

  return (
    <div className="games_card">
      <Link to={`${gamePath}`}>
        <img className="games_card_img" alt={game.title} src={game.thumbnail} />
        <div className="games_card_info">
          <h3>{game.title}</h3>
          <ul className="games_card_description">
            <li>{game.short_description}</li>
            <hr />
            <li>{game.publisher}</li>
            <li>
              <ul className="games_card_description_group">
                <li>{game.genre}</li>
                <li>{new Date(game.release_date).toLocaleDateString()}</li>
              </ul>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  )
}
