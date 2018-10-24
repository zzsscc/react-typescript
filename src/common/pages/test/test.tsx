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
    alert(this.props.stores.userInfo)
  }
  render() {
    return (
      <div>
        test
      </div>
    )
  }
}
