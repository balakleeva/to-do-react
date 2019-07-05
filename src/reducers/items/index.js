import * as Types from './types'

const initState = {
    TodoList: [],
    currentFilter: 'all',
};

export default function (state = initState, action) {
    switch (action.type) {
        case Types.ITEMS_ADD_TODO:
            return {
                ...state,
                TodoList: [...state.TodoList, {
                    id: action.id,
                    text: action.text,
                    isDone: false,
                }]
            };

        case Types.ITEMS_REMOVE_TODO:
            return {
                ...state,
                TodoList: [...state.TodoList.filter(item => item.id !== action.id)]
            };

        case Types.ITEMS_CHANGE_DONE:
            return {
                ...state,
                TodoList: [...state.TodoList.map(item =>
                    item.id === action.id ?
                        {...item, isDone: !item.isDone} :
                        item
                )]
            };

        default:
            return state
    }
};
