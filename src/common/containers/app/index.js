import * as React from 'react';
import { Route as Route } from 'react-router-dom'
import { Test } from 'pages/test'

@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    console.log(this.props)
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

export default App;
