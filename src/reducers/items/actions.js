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
        id: itemID,
    }
}

export function changeDone(itemID) {
    return {
        type: Types.ITEMS_CHANGE_DONE,
        id: itemID,
    }
}