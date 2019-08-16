import * as Types from './types'

export const userLogin = (params) => (dispatch, getState, api) => {
    dispatch({
        type: Types.USER_LOGIN
    })

    return api.user.userLogin(params).then((response) => {
        console.log('RESPONSE', response)
        dispatch({
            type: Types.SUCCESSFULLY_USER_LOGIN,
            payload: response
        })
    }).catch((err) => {
        dispatch({
            type: Types.ERROR_IN__USER_LOGIN,
            payload: err
        })
    })
}

export const userRegister = (params) => (dispatch, getState, api) => {
    dispatch({
        type: Types.USER_REGISTER
    })

    return api.user.userRegister(params).then(response => {
        dispatch({
            type: Types.SUCCESSFULLY_USER_REGISTER,
            payload: response
        })
    }).catch(err => {
        dispatch({
            type: Types.ERROR_IN_USER_REGISTER,
            payload: err
        })
    })
}

export const userLogout = () => (dispatch, getState, api) => {
    dispatch({
        type: Types.USER_LOGOUT
    })
}