import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import G2 from './Pages/G2/G2';
import G6 from './Pages/G6/G6';
import Echarts from './Pages/Echarts/Echarts';
import Home from './Pages/Home';

export default class router extends Component {
  render () {
    return (
      <Router>
        <Home>
          <Route path="/main" component={Main}></Route>
          <Route exact path="/g6" component={G6}></Route>
          <Route exact path="/g2" component={G2}></Route>
          <Route exact path="/echarts" component={Echarts}></Route>
        </Home>
      </Router>
    )
  }
}