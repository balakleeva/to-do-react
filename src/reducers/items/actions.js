import * as Types from './types'

let initID = 1;

export function addTodo(text) {
    return {
        type: Types.ITEMS_ADD_TODO,
        id: initID++,
        text: text,
    }
}

export function removeTodo(itemID) {
    return {
        type: Types.ITEMS_REMOVE_TODO,
        payload: itemID,
    }
}