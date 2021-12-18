import {addTodo, updateTodo} from '../persistence/todoRepo.js';
import Todo from '../Todo.js';
import drawUi from '../view/redrawUi.js';
import {getCurrentTodo, setCurrentTodo} from '../persistence/todoRepo.js';

function todoInputDiv() {
  const addTodoDiv = document.createElement("div");

  const todoInput = document.createElement("input");
  todoInput.style.width = "100%";
  if (getCurrentTodo()) {
    todoInput.value = getCurrentTodo().text;
  }

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "Add";

  addTodoDiv.appendChild(todoInput);
  addTodoDiv.appendChild(addButton);

  addButton.addEventListener('click', () => {
    if (!getCurrentTodo()) {
      const todo = new Todo(todoInput.value);
      addTodo(todo);
    } else {
      const currentTodo = getCurrentTodo();
      currentTodo.text = todoInput.value;
      updateTodo(currentTodo);
    }
    setCurrentTodo(null);
    drawUi();
  });

  return addTodoDiv;
}

export default todoInputDiv;
