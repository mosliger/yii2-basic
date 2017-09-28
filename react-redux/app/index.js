import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { AppContainer } from 'react-hot-loader'
import './css/style.scss'
import { Provider } from 'react-redux'
import { Login, Signup, Profile } from './components'

import configureStore from './store/configureStore'

const store = configureStore()
const NextRootApp = require('./containers/Root').default

export const LoginComponent = (forms, error, id) => render(
  <Provider store={store} key='provider'>
    <Login forms={forms} errorMessage={error} />
  </Provider>,
  document.getElementById(id)
)

export const SignupComponent = (forms, id) => render(
  <Provider store={store} key='provider'>
    <Signup forms={forms} />
  </Provider>,
  document.getElementById(id)
)

export const ProfileComponent = (forms, id) => render(
  <Provider store={store} key='provider'>
    <Profile forms={forms} />
  </Provider>,
  document.getElementById(id)
)

const rootEl = document.getElementById('app')

if (process.env.NODE_ENV === 'development') render(<Root />, rootEl) // render not send value

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer>
        <NextRootApp />
      </AppContainer>,
      rootEl
    )
  })
}
