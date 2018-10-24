import * as React from 'react'
import { observer, inject } from 'mobx-react'

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
    console.info(this.props.stores)
  }

  handleAdd = async () => {
    this.props.stores.HomeStore.addCount()
  }
  render() {
    const { count } = this.props.stores.HomeStore
    return (
      <div>
        test
        <p>{count}</p>
        <button onClick={this.handleAdd}>add</button>
      </div>
    )
  }
}
