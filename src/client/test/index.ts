import 'core-js'
import 'reflect-metadata'
// ts必须使用as引用： https://github.com/Microsoft/TypeScript/issues/5565#issuecomment-155216760
import { render as render } from 'react-dom'
import app from 'app/index.tsx'
import TestStore from 'stores/test'
import HomeStore from 'stores/home'

render(app({ stores: { TestStore, HomeStore } }), document.getElementById('app') as HTMLElement)

if (module.hot) {
  module.hot.accept('app/index.tsx', () => {
    render(app({ stores: { TestStore, HomeStore } }), document.getElementById('app') as HTMLElement)
  })
}
