import * as Types from './types'

export function changeFilter(filter) {
    return {
        type: Types.filtersList,
        payload: filter,
    }
}