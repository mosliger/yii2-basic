import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, LoginPage, SignupPage, ProfilePage } from './containers'
import StyleGuide from './containers/styleGuide/index'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/style-guide' component={StyleGuide} />
    <Route path='/login' component={LoginPage} />
    <Route path='/signup' component={SignupPage} />
    <Route path='/profile' component={ProfilePage} />
  </Route>
)

export default routes
