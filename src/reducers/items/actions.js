import * as Types from './types'
import fetch from 'cross-fetch'

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

export function allTodos(test) {
    return {
        type: Types.ALL_ITEMS,
        test
    }
}

export function recieveTodos(test, json) {
    return {
        type: 'RECIEVE_ITEMS',
        test,
        todos: json.data.children.map(child => child.data),
    }
}

function fetchTodos(arg) {
    return dispatch => {
        dispatch(allTodos(test))
        return fetch('/todos').then(response => response.json()).then(json => dispatch(recieveTodos(test, json)))
    }
}