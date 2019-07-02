let startID = 1;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: startID++,
    text: text
});

export const removeTodo = (item_id) => ({
    type: 'REMOVE_TODO',
    id: item_id,
});

export const changeDone = (item_id) => ({
    type: 'CHANGE_DONE',
    id: item_id,
});

export const chageFilter = (filter) => ({
    type: 'CHANGE_FILTER',
    filter: filter
});

export const filtersList = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};
