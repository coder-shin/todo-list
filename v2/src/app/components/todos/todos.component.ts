import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  constructor(
    private todoService: TodoService
  ) { }

  todoList: Todo[] = [
    this.todoService.generateTodo('default todo1'),
    this.todoService.generateTodo('default todo2'),
    this.todoService.generateTodo('default todo3'),
  ];

  toggleDone = (todo: Todo): void => {
    todo.done = !todo.done;
  }

  addTodoByKeyupEnter = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const title: string = input.value;

    if (!title) {
      return;
    }

    this.addTodo(title);
    this.clearInputValue(input);
  }

  addTodo = (title: string): void => {
    const newTodo = this.todoService.generateTodo(title);
    this.todoList.push(newTodo);
  }

  clearInputValue = (input: HTMLInputElement): void => {
    input.value = '';
  }

  removeTodo = (todo: Todo): void => {
    const id = todo.id;
    this.todoList = this.todoList.filter((t: Todo) => t.id !== id);
  }
}
