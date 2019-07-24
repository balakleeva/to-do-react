import TodoController from "./controllers";
const Todo = new TodoController();

module.exports = (app) => {
    app.post('/add', Todo.create);
    app.get('/todos', Todo.index);
    app.delete('/todos/:id', Todo.delete);
    app.post('/todos/:id', Todo.changeDone);
};