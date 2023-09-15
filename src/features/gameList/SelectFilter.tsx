import {ChangeEvent, type PropsWithChildren} from 'react'
import './gameList.css'

interface GameFilterProps<T extends string> {
  options: {name: string; value: string}[]
  value: T
  onSelect: (value: T) => void
}

export function SelectFilter<T extends string>(
  props: PropsWithChildren<GameFilterProps<T>>
) {
  const {options, value, onSelect} = props

  const selectHendler = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect?.(e.target.value as T)
  }

  return (
    <select className="filters-select" value={value} onChange={selectHendler}>
      {options.map((opt) => {
        return (
          <option key={opt.name} value={opt.value}>
            {opt.name}
          </option>
        )
      })}
    </select>
  )
}

export default SelectFilter
