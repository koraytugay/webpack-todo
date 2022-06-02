export default class Todo {

  static idCounter = 0;

  constructor(text) {
    this.id = Todo.idCounter++;
    text;
    this.complete = false;
  }
}
