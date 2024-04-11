import { Todo } from './todo';

export class TodoList {
  private _todoList: Todo[];

  constructor(todoList: Todo[]) {
    this._todoList = todoList;
  }

  addTodo = (title: string): void => {
    const todo = new Todo(title);
    this.todoList.push(todo);
  }

  get todoList() {
    return this._todoList;
  }
}
