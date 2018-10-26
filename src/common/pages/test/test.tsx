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
    console.info('test props', this.props)
    const { coo } = this.props.match.params
    if (coo) {
      console.info('test params coo', coo)
    }
    const { state } = this.props.location
    if (state) {
      const { origin } = state
      console.info('test state origin', origin)
    }
  }

  handleAdd = async () => {
    this.props.stores.HomeStore.addCount()
  }
  handleJump = async () => {
    // 目标页面使用this.props.location.state.key获取origin
    this.props.history.push('/home', { origin: this.props.match.url })
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
