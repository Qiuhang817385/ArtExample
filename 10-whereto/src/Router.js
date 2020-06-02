import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Index from './page/index/App';
import Query from './page/query/App';
export default function RouterAll () {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path="/query" component={Query}></Route>
        </Switch>
      </Home>
    </Router>
  )
}
