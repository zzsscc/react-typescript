import * as React from 'react'
import { observer, inject } from 'mobx-react'

interface Props {
  [name: string]: any
}

@inject('stores')
@observer
export default class Home extends React.Component<Props, object> {
  constructor(props?: any) {
    super(props)
    this.state = {
      data: 1,
    }
  }
  componentWillMount() {
    console.info(this.props.stores)
  }

  handleAdd = async () => {
    await this.props.stores.HomeStore.addCount()
  }
  handleJump = async () => {
    this.props.history.push('/test', null)
  }
  render() {
    const { count } = this.props.stores.HomeStore
    return (
      <div>
        <p>home</p>
        <p>{count}</p>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleJump}>jump</button>
      </div>
    )
  }
}
