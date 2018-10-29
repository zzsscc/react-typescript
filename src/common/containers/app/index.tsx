import * as React from 'react'
import { observer } from 'mobx-react'
import { Route as Route, Switch as Switch } from 'react-router-dom'
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
    return (
      <div>
        app
        <Switch>
          <Route exact path="/" component={Test} />
          <Route path="/test/:coo" component={Test} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    )
  }
}
