import * as Types from './types'

export function addTodo(text) {
    return {
        type: Types.ITEMS_ADD_TODO,
        payload: text,
    }
}

export function removeTodo(itemID) {
    return {
        type: Types.ITEMS_REMOVE_TODO,
        payload: itemID,
    }
}