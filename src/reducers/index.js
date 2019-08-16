import { combineReducers } from 'redux'
import items from './items'
import filtersList from './filtersList'
import users from './users'

export default combineReducers({
    items,
    filtersList,
    users,
})
