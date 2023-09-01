import {useEffect, useState} from 'react'
import {GamesList, getGames} from '../api/freeToGameApi'
import './pages.css'
import {CardGame} from '../features/gameList/CardGame'

const Games = () => {
  const [games, setGames] = useState<GamesList>([])

  useEffect(() => {
    getGames().then((data) => setGames(data))
  }, [])

  return (
    <>
      <header className="header">Free to Play</header>
      <div className="row_games">
        {games.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}

export default Games
