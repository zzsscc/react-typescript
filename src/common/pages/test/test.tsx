import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Link as Link } from 'react-router-dom'

interface Props {
  [name: string]: any
}

@inject('stores')
@observer
export default class Test extends React.Component<Props, object> {
  constructor(props?: any) {
    super(props)
    this.state = {
      data: 1,
    }
  }
  componentWillMount() {
    // console.info(this.props)
  }

  handleAdd = async () => {
    this.props.stores.HomeStore.addCount()
  }
  handleJump = async () => {
    this.props.history.push('/home', null)
  }
  render() {
    const { count } = this.props.stores.HomeStore
    return (
      <div>
        <p>test</p>
        <p>{count}</p>
        <button onClick={this.handleAdd}>add</button>
        <Link to="/home">Home</Link>
        <button onClick={this.handleJump}>jump</button>
      </div>
    )
  }
}
