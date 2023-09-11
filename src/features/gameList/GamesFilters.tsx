import {FC} from 'react'
import {Filters} from '../../api/freeToGameApi'

// const prepareFilters = (filtersData: string[]) =>
//   filtersData.map((filter) => ({
//     value: filter,
//     label: filter.split('-').join(' ')
//   }))

type GamesFiltersProps = {
  filters: Filters
}

export const GamesFilters: FC<GamesFiltersProps> = ({filters}) => {
  return null
}
