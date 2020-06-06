import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
// import Mvvm from './component/mvvm/Mvvm'
const Mvvm = lazy(() => import('./component/mvvm/Mvvm'))
const SubSup = lazy(() => import('./component/subsup/Index'))
const Mouse = lazy(() => import('./component/Mouse/Mouse'));
const Hoc = lazy(() => import('./component/Hoc/Hoc'))
const A = lazy(() => import('./component/aaaa/A'))
const Portals = lazy(() => import('./component/portals/Portals'))
const Login = lazy(() => import('./component/login/Login'))
const Edit = lazy(() => import('./component/edit/Edit'))
const Virtue = lazy(() => import('./component/virtue/Virtue'))
const Animations = lazy(() => import('./component/animations/Animations'))

// import SubSup from './component/subsup/SubSup'
export default class Erouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Suspense fallback={<div>这里可以是一个动画组件Loading...</div>}>
            <Switch>
              {/* route是path属性，注意了啊 */}
              <Route path='/subsup' component={SubSup}></Route>
              <Route path='/mvvm' component={Mvvm}></Route>
              <Route path='/mouse' component={Mouse}></Route>
              <Route path='/hoc' component={Hoc}></Route>
              <Route path='/a' component={A}></Route>
              <Route path='/portals' component={Portals}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/edit' component={Edit}></Route>
              <Route path='/virtue' component={Virtue}></Route>
              <Route path='/animations' component={Animations}></Route>

            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>)
  }
}

