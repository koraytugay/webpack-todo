export default class Todo {

  static idCounter = 0;

  constructor(text) {
    this.id = Todo.idCounter++;
    this.text = text;
    this.complete = false;
  }
}
