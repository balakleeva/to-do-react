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
                }]
            };

        case Types.ITEMS_REMOVE_TODO:
            return {
                ...state
            };

        default:
            return state
    }
};
