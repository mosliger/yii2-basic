import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import configureStore from '../store/configureStore'
import routes from '../routes'

export default (props) => {
  /* Get initialstate */
  console.log('initialState >>', props.initialState)
  const isBuildClient = process.env.BUILD_ENV === 'client'
  const history = isBuildClient ? useRouterHistory(createHashHistory)({ queryKey: false }) : browserHistory
  const store = configureStore(props.initialState, history)
  return (
    <Provider store={store} key='provider'>
      <Router history={history} routes={routes} />
    </Provider>
  )
}
