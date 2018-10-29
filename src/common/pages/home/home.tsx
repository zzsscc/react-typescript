import * as React from 'react'
import { observer, inject } from 'mobx-react'

interface Props {
  [name: string]: any
}

@inject('HomeStore')
@observer
export default class Home extends React.Component<Props, object> {
  constructor(props?: any) {
    super(props)
    this.state = {
      data: 1,
    }
  }
  componentWillMount() {
    console.info('home props', this.props)
    const { state } = this.props.location
    if (state) {
      const { origin } = state
      console.info('test state origin', origin)
    }
  }
  handleBack = async () => {
    await this.props.history.push('/')
  }
  handleAdd = async () => {
    await this.props.HomeStore.addCount()
  }
  handleJump = async () => {
    const { count } = this.props.HomeStore
    // 目标页面使用this.props.match.params.key获取count、this.props.location.state.key获取origin
    await this.props.history.push(`/test/${count}`, { origin: this.props.match.url })
  }
  render() {
    const { count } = this.props.HomeStore
    return (
      <div>
        <p>home</p>
        <p>{count}</p>
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleJump}>jump</button>
      </div>
    )
  }
}
