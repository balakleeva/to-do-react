import * as Types from './types'

let initID = 1;

// export function addTodo(text) {
//     return {
//         type: Types.ITEMS_ADD_TODO,
//         id: initID++,
//         text: text,
//     }
// }
//
// export function removeTodo(itemID) {
//     return {
//         type: Types.ITEMS_REMOVE_TODO,
//         id: itemID,
//     }
// }
//
// export function changeDone(itemID) {
//     return {
//         type: Types.ITEMS_CHANGE_DONE,
//         id: itemID,
//     }
// }

export const fetchTodos = () => (dispatch, getState, api) => {
    console.log('dispatch')
    dispatch({
        type: Types.START_LOADING_ALL_TODOS
    });

    return api.todo.fetchAll().then(response => {
        console.log('response in dispatch', response);
        dispatch({
            type: Types.SUCCESS_LOADING_ALL_TODOS,
            payload: response.data,
        })
    }).catch((err) => {
        dispatch({
            type: Types.ERROR_IN_LOADING_ALL_TODOS,
            payload: err,
        })
    });
};

export const changeStatus = (params) => (dispath, getState, api) => {
    dispath({
        type: Types.ITEMS_CHANGE_DONE,
        payload: params,
    });

    return api.todo.changeTodo(params.id).then(response => {
        console.log('response', response)
        dispath({
            type: Types.ITEMS_CHANGE_DONE_SUCCESS,
            payload: response.data
        })
    }).catch((err) => {
      dispath({
          type: Types.ITEMS_ADD_TODO_ERROR,
          payload: err
      })
    })
};

export const deleteTodo = (params) => (dispath, getState, api) => {
    dispath({
        type: Types.ITEMS_REMOVE_TODO,
        payload: params,
    });

    return api.todo.deleteTodo(params.id).then(response => {
        dispath({
            type: Types.ITEMS_REMOVE_TODO_SUCCESS,
            payload: response.data
        })
    }).catch((err) => {
        dispath({
            type: Types.ITEMS_REMOVE_TODO_ERROR,
            payload: err
        })
    })
};

export const createTodo = (params) => (dispatch, getState, api) => {
    dispatch({
        type: Types.ITEMS_ADD_TODO,
        payload: params
    });

    return api.todo.createTodo(params).then(response => {
        dispatch({
            type: Types.ITEMS_ADD_TODO_SUCCESS,
            payload: response.data
        })
    }).catch((err) => {
        dispatch({
            type: Types.ITEMS_ADD_TODO_ERROR,
            payload: err
        })
    })
};