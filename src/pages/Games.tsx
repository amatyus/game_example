import {useEffect} from 'react'
import './pages.css'
import {CardGame} from '../features/gameList/CardGame'
import {useSelector} from 'react-redux'
import {useAppDispatch} from '../storeProvider/store'
import {getGamesList} from '../api/freeToGameApi'
import {
  gamesListSelector,
  gamesIsLoadingSelector
} from '../storeProvider/gamesSelectors'

const Games = () => {
  const dispatch = useAppDispatch()

  const games = useSelector(gamesListSelector)
  const isLoading = useSelector(gamesIsLoadingSelector)

  console.log(isLoading)

  useEffect(() => {
    dispatch(getGamesList())
  }, [])

  console.log(games)

  return (
    <>
      <header className="header">Free to Play</header>
      {!isLoading ? (
        <div className="row_games">
          {games.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default Games
