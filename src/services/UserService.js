import ApiService from './ApiService'

export default {
    userLogin(params){
        return ApiService.post('/login', params)
    },

    userRegister(params) {
        return ApiService.post('/add-user', params)
    }
}