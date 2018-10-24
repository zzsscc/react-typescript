import * as React from 'react'
import { observer } from 'mobx-react'
import { Route as Route } from 'react-router-dom'
import { Test } from 'pages/test'

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
        <div>
          <Route exact path="/" />
          <Route path="/test" component={Test} />
        </div>
      </div>
    )
  }
}
