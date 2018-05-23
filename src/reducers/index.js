import { combineReducers } from 'redux'
import { omdb } from './omdb'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  omdb,
  router: routerReducer
})

export default rootReducer
