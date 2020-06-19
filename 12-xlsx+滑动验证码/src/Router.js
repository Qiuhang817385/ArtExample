import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Page1 from './page/page1/Page1';
import Page2 from './page/page2/Page2';
import Page3 from './page/page3/Page3';
import Page4 from './page/page4/Page4';
import Page5 from './page/page5/Page5';
import Page6 from './page/page6/Page6';
export default function RouterAll () {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
          <Route path="/page3" component={Page3}></Route>
          <Route path="/page4" component={Page4}></Route>
          <Route path="/page5" component={Page5}></Route>
          <Route path="/page6" component={Page6}></Route>
        </Switch>
      </Home>
    </Router>
  )
}
