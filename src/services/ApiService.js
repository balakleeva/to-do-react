// fetch
// тут сделать подставку токена
import axios from "axios";

class ApiService {
    get(url) {
        axios.get(url)
            .then(response => {
                return response
            })
    }

    createTodo(url) {
        axios.post(url)
            .then(response => {
                return response
            }).catch((err) => {
                console.log('Error:', err)
                return err
        })
    }

    post(url) {
        axios.post(url)
            .then(response => {
                return response
            })
    }

    delete(url) {
        axios.delete(url)
            .then(response => {
                return response
            })
    }
}

export default new ApiService();