import * as React from 'react'
import { BrowserRouter as Router, Switch as Switch } from 'react-router-dom'
import App from 'containers/app/index.tsx'
const supportsHistory = 'pushState' in window.history

const routes = (
  <Router
    // basename="/minooo"
    forceRefresh={!supportsHistory}
  >
    <Switch>
      <App />
    </Switch>
  </Router>
)

export default routes
