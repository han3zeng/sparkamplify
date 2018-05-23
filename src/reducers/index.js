import { combineReducers } from 'redux'
import { omdb } from './omdb'
const rootReducer = combineReducers({
  omdb,
})

export default rootReducer
