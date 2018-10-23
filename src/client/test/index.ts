import 'core-js'
// import * as React from 'react'
import { render as render } from 'react-dom'
import * as ReactDOM from 'react-dom'
import app from 'app/test/index.tsx'

render(app({}), document.getElementById('app'))

if (module.hot) {
  module.hot.accept('app/test/index.tsx', (): any => {
    ReactDOM.render(app({}), document.getElementById('app'))
  })
}
