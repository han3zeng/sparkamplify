import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/app'
import Home from './components/home'
import { Router, Route, browserHistory, hashHistory, Redirect, IndexRoute } from 'react-router'
import Search from './containers/search'
import FourOFour from './components/404'
import List from './containers/list'
import Card from './containers/card'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/list(/:title/:type/:year/:page)" component={List}/>
        <Route path="/card(/:id)" component={Card}/>
        <Route path='/404' component={FourOFour} />
      </Route>
      <Redirect from='*' to='/404' />
    </Router>
  </Provider>,
  document.getElementById("root")
);
