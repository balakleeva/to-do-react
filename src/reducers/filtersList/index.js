import * as Types from './types'

export default function (state = Types.filtersList.SHOW_ALL, action) {
    switch (action.type) {
        case Types.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

