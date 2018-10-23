import * as React from 'react'

@observer export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    console.log('Test', this.props)
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}
