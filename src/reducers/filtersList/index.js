import * as Types from './types'

const initState = {
    filter: 'SHOW_ALL',
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case Types.filtersList:
            return payload.filter;
        default:
            return state;
    }
};

