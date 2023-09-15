import {useSelector} from 'react-redux'
import {
  gamesCategoryFiltersSelector,
  gamesPlatformFiltersSelector,
  gamesSortFiltersSelector
} from '../../storeProvider/gamesSelectors'
import {allCategory, allPlatforms, allSortBy} from './utils'
import SelectFilter from './SelectFilter'
import {
  CategoryField,
  PlatformField,
  SortByField,
  getGamesList
} from '../../api/freeToGameApi'
import {useAppDispatch} from '../../storeProvider/store'
import {gamesListActions} from '../../storeProvider/gamesListSlice'
import './gameList.css'

export const GamesFilters = () => {
  const category = useSelector(gamesCategoryFiltersSelector)
  const platform = useSelector(gamesPlatformFiltersSelector)
  const sort = useSelector(gamesSortFiltersSelector)

  const dispatch = useAppDispatch()

  const handleChangeSort = (sort: SortByField) => {
    dispatch(gamesListActions.setSort(sort))
    dispatch(getGamesList())
  }

  const handleChangePlatform = (platform: PlatformField) => {
    dispatch(gamesListActions.setPlatform(platform))
    dispatch(getGamesList())
  }

  const handleChangeCategory = (category: CategoryField) => {
    dispatch(gamesListActions.setCategory(category))
    dispatch(getGamesList())
  }

  return (
    <>
      <div className="row-filters">
        <SelectFilter<PlatformField>
          options={allPlatforms}
          value={platform}
          onSelect={handleChangePlatform}
        />

        <SelectFilter<CategoryField>
          options={allCategory}
          value={category}
          onSelect={handleChangeCategory}
        />

        <SelectFilter<SortByField>
          options={allSortBy}
          value={sort}
          onSelect={handleChangeSort}
        />
      </div>
    </>
  )
}
