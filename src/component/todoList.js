import {getTodos} from '../persistence/todoRepo.js';
import editImage from '../../public/edit.png';
import {setCurrentTodo} from '../persistence/todoRepo.js';
import drawUi from '../view/redrawUi.js';

function todoList() {
  const todos = getTodos();

  if (todos.length === 0) {
    const p = document.createElement("p");
    p.innerText = "You currently do not have any Todo items!";
    return p;
  }

  let todosDiv = document.createElement("div");
  for (let todo of todos) {
    const todoDiv = document.createElement("div");

    const editIcon = document.createElement("img");
    editIcon.src = editImage;
    editIcon.addEventListener("click", ev => {
      setCurrentTodo(todo);
      drawUi();
    });
    todoDiv.classList.add("todoDiv");

    const todoSpan = document.createElement("span");
    todoSpan.innerText = todo.text;

    const doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";

    if (todo.complete) {
      doneCheckBox.checked = true;
      todoSpan.classList.add('done');
    }

    doneCheckBox.addEventListener('change', ev => {
      todo.complete = !todo.complete;
      todoSpan.classList.toggle('done');
    });

    todoDiv.appendChild(editIcon);
    todoDiv.appendChild(todoSpan);
    todoDiv.appendChild(doneCheckBox);

    todosDiv.appendChild(todoDiv);
  }

  return todosDiv;
}

export default todoList;
