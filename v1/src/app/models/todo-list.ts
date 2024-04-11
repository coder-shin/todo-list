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

  remove = (id: number): void => {
    this.todoList = this._todoList.filter((todo: Todo) => todo.id !== id);
  }

  get todoList() {
    return this._todoList;
  }

  set todoList(todoList: Todo[]) {
    this._todoList = todoList;
  }
}
