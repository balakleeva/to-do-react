import * as Types from './types'

export const fetchTodos = () => (dispatch, getState, api) => {
    dispatch({
        type: Types.START_LOADING_ALL_TODOS
    });

    return api.todo.fetchAll().then(response => {
        dispatch({
            type: Types.SUCCESS_LOADING_ALL_TODOS,
            payload: response,
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
    });

    return api.todo.changeTodo(params).then(response => {
        dispath({
            type: Types.ITEMS_CHANGE_DONE_SUCCESS,
            payload: response
        })
    }).catch((err) => {
      dispath({
          type: Types.ITEMS_ADD_TODO_ERROR,
          payload: err
      })
    })
};

export const deleteTodo = (params) => (dispatch, getState, api) => {
    dispatch({
        type: Types.ITEMS_REMOVE_TODO,
    });

    return api.todo.deleteTodo(params).then(response => {
        dispatch({
            type: Types.ITEMS_REMOVE_TODO_SUCCESS,
            payload: response
        })
    }).catch((err) => {
        dispatch({
            type: Types.ITEMS_REMOVE_TODO_ERROR,
            payload: err
        })
    })
};

export const addTodo = (params) => (dispatch, getState, api) => {
    dispatch({
        type: Types.ITEMS_ADD_TODO,
        payload: params
    });

    return api.todo.createTodo(params).then(response => {
        dispatch({
            type: Types.ITEMS_ADD_TODO_SUCCESS,
            payload: response
        })
    }).catch((err) => {
        dispatch({
            type: Types.ITEMS_ADD_TODO_ERROR,
            payload: err
        })
    })
};