let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentEditIndex = null;
let currentDeleteIndex = null;

function render(task = 'all') {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    let checktodos = [];
if (task === 'all') {
    checktodos = todos;
} else if (task === 'done') {
    checktodos = todos.filter(todo => todo.done);
} else if (task === 'todo') {
    checktodos = todos.filter(todo => !todo.done);
}
if (checktodos.length === 0) {
    todoList.innerHTML = 'No Tasks 📝';
    return;
}