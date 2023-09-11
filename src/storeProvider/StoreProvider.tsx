import {PropsWithChildren, ReactNode} from 'react'
import {StateSchema} from './StateSchema'
import {createReduxStore} from './store'
import {Provider} from 'react-redux'

interface storeProviderProps {
  initialState?: StateSchema
  children: ReactNode
}

export function StoreProvider(props: PropsWithChildren<storeProviderProps>) {
  const {initialState, children} = props

  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}
