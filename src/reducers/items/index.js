import * as Types from './types'

const initState = {
    todoList: [],
    isLoading: false,
    error: false
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case Types.START_LOADING_ALL_TODOS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Types.SUCCESS_LOADING_ALL_TODOS: {
            return {
                ...state,
                isLoading: false,
                todoList: payload
            }
        }

        case Types.ERROR_IN_LOADING_ALL_TODOS: {
            return {
                ...state,
                isLoading: false,
                error: true
            }
        }

        case Types.ITEMS_ADD_TODO:
            return {
                ...state,
                isLoading: true
            }

        case Types.ITEMS_ADD_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true
            }

        case Types.ITEMS_ADD_TODO_SUCCESS:
            if (payload.text === '') {
                alert('Write TODO!');
                return {...state}
            }
            return {
                ...state,
                isLoading: false,
                todoList: [...state.todoList, {
                    _id: payload._id,
                    text: payload.text,
                    isDone: payload.isDone,
                }]
            };

        case Types.ITEMS_REMOVE_TODO:
            return {
                ...state,
                todoList: [...state.todoList.filter(item => item._id !== payload)],
                isLoading: true
            };

        case Types.ITEMS_REMOVE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }


        case Types.ITEMS_REMOVE_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true
            }


        case Types.ITEMS_CHANGE_DONE:
            return {
                ...state,
                todoList: [...state.todoList.map(item =>
                    item._id === payload ?
                        {...item, isDone: !item.isDone} :
                        item
                )],
                isLoading: true
            };

        case Types.ITEMS_CHANGE_DONE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true
            }

        case Types.ITEMS_CHANGE_DONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state
    }
};
