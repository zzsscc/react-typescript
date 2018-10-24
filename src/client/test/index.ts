import 'core-js'
import 'reflect-metadata'
import { render as render } from 'react-dom'
import * as ReactDOM from 'react-dom'
import app from 'app/test/index.tsx'
import TestStore from 'stores/test'
import HomeStore from 'stores/home'

render(app({ stores: {TestStore, HomeStore} }), document.getElementById('app') as HTMLElement)

if (module.hot) {
  module.hot.accept('app/test/index.tsx', () => {
    ReactDOM.render(app({ stores: {TestStore, HomeStore} }), document.getElementById('app') as HTMLElement)
  })
}
