import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RegisterApp from './containers/RegisterApp'
import configureStore from './stores/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <RegisterApp />
  </Provider>,
  document.getElementById('root')
)
