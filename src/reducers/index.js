import { combineReducers } from 'redux'
import items from './items'
import filtersList from './filtersList'

export default combineReducers({
    items,
    filtersList,
})
