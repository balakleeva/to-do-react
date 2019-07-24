import TodoModel from '../models/todo_model';

class TodoController {
    index(req, res) {
        console.log('Request: ', req)
        TodoModel.find().then((err, todos) => {
            if (err) {
                res.send(err);
            }

            res.json(todos);
        });
    }

    create(req, res) {
        console.log('Add request', req)
        const data = req.body;

        const todo = new TodoModel({
            text: data.text,
            isDone: false,
        });

        todo.save()
            .then(() => {
                res.json({status: 'ok'});
            }).catch((err) => {
            console.log('Error: ', err)
        });
    }

    changeDone(req, res) {
        TodoModel.find(req.params.id).exec((err, todo) => {
            if (err) {
                res.json({status: 'error'})
            }

            const newTodo = new TodoModel;

            newTodo.isDone = !newTodo.isDone
            newTodo.save((err, saved) => {
                if (err) {
                    res.json({status: 'error'})
                }

                res.json({todo: saved})
            })
        })
    }

    delete(req, res) {
        TodoModel.remove({
            _id: req.params.id,
        }).then(todo => {
            if (todo) {
                res.json({status: 'deleted'});
            } else {
                res.json({status: 'error'});
            }
        });
    }
}

export default TodoController;