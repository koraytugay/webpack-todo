const todoList = [];

let currentTodo = undefined;

function addTodo(todo) {
  todoList.push(todo);
}

function getTodos() {
  return [...todoList];
}

function getCurrentTodo() {
  return currentTodo;
}

function setCurrentTodo(todo) {
  currentTodo = todo;
}

function updateTodo(todo) {
  const toUpdate = todoList.filter(item => item.id === todo.id);
  toUpdate.text = todo.text;
}

export {
  addTodo,
  getTodos,
  getCurrentTodo,
  setCurrentTodo,
  updateTodo
}
