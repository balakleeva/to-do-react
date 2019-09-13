import * as Types from './types'

const token = localStorage.getItem('token')
const isLogin = token ? true : false

const initState = {
    isLoggedIn: isLogin,
    token: token
}

export default function (state = initState, {type, payload}) {
    switch (type) {
        case Types.USER_LOGIN:
            return {
                ...state,
                isLoading: true
            }

        case Types.SUCCESSFULLY_USER_LOGIN:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('user_id', payload.userData.id)
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
            }

        case Types.ERROR_IN__USER_LOGIN:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }

        case Types.USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}