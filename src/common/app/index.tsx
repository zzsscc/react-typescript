// ts必须使用* as： https://github.com/Microsoft/TypeScript/issues/5565#issuecomment-155216760
import * as React from 'react'
import { AppContainer as AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import routes from 'routes/index.tsx'

interface Props {
  stores?: Object,
  [name: string]: any
}
export default function app(props?: Props): any {
  const stores: Object = props.stores
  return (
    <AppContainer>
      <Provider {...stores}>
        {routes}
      </Provider>
    </AppContainer>
  )
}
