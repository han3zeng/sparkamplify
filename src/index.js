import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import { ConnectedRouter, push } from 'react-router-redux'
import Home from './containers/home'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory';


const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
