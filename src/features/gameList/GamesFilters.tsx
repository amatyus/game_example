import {useState, type PropsWithChildren} from 'react'
// import {GameFilter} from './GameFilter'
import {useDispatch} from 'react-redux'
// import { PlatformField, SortBy, fetchGamesList } from './StoreProvider/fetchGamesList';

interface GameFiltersProps {
  className?: string
}

export function GameFilters(props: PropsWithChildren<GameFiltersProps>) {
  // const { className } = props;
  // const [category, setCategory] = useState(null)
  // const [platform, setPlatform] = useState(null)
  // const [sort, setSort] = useState(SortBy.RELEASE_DATE)
  // const dispatch: any = useDispatch()

  // const handleChangePlatform = (item: PlatformField) => {
  //     setPlatform(item)
  //     dispatch(fetchGamesList({platform: item, category, sortBy: sort}))
  // }

  return (
    <div className={'GameFilters'}>
      {/* <GameFilter<PlatformField> value={platform} onChange={handleChangePlatform}/> */}
      {/* <select name="sort" id="" value={sort}></select> */}
      {/* <select name="category" id="" value={categoty}></select> */}
    </div>
  )
}
