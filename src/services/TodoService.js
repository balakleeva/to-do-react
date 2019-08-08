import ApiService from './ApiService';

export default {
    fetchAll() {
        return ApiService.get('/todos');
    },
    deleteTodo(params) {
        return ApiService.delete('/todos/' + params);
    },
    changeTodo(params) {
        return ApiService.post('/todos/' + params)
    },
    createTodo(params) {
        return ApiService.post('/add-todo', params)
    }
}