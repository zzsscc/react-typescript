import * as React from 'react'
import { observer } from 'mobx-react'
import { Route as Route } from 'react-router-dom'
import { Test } from 'pages/test'
import { Home } from 'pages/home'

import 'styles/common.scss'

export interface Props {
  props?: any,
  [name: string]: any
}

@observer export default class App extends React.Component<object, any> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    console.info(this)
    return (
      <div>
        app
        <div>
          <Route exact path="/" component={Test} />
          <Route path="/test" component={Test} />
          <Route path="/home" component={Home} />
        </div>
      </div>
    )
  }
}
