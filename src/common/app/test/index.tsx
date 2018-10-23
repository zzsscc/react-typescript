import * as React from 'react'  // ts必须使用* as： https://github.com/Microsoft/TypeScript/issues/5565#issuecomment-155216760
import { AppContainer as AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'

import routes from 'routes/test'

export default function app(props?: any): any {
//   const stores = props.stores
  return (
    <AppContainer>
      <Provider>
        {routes}
      </Provider>
    </AppContainer>
  )
}
