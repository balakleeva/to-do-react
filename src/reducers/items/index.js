import * as Types from './types'

const initState = {
    TodoList: [],
    currentFilter: 'all',
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case Types.ITEMS_ADD_TODO:
            return {
                ...state,
                TodoList: [...state.TodoList, {
                    ...payload,
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
