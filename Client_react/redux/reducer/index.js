import { combineReducers } from 'redux'
import todos from './todoApp'

const todoApp = combineReducers({
  todos,
})

export default todoApp