import ApiService from './ApiService';

export default {
    fetchAll() {
        return ApiService.get('/todos');
    },
    deleteTodo(id) {
        return ApiService.delete('/todos/' + id);
    },
    changeTodo(id) {
        return ApiService.post('/todos/' + id)
    },
    createTodo() {
        return ApiService.createTodo('/add')
    }
}