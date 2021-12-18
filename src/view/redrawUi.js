import todoInputDiv from '../component/todoInputDiv.js';
import todoList from '../component/todoList.js';

function drawUi() {
  const main = document.querySelector("main");
  main.innerHTML = '';
  main.appendChild(todoInputDiv());
  main.appendChild(todoList());
}

export default drawUi;
