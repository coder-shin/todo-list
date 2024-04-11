import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [
    new Todo('default todo1'),
    new Todo('default todo2'),
    new Todo('default todo3'),
  ]

  addTodoByKeyupEnter = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const title: string = input.value;

    if (!title) {
      return;
    }

    this.addTodo(title);
    this.clearInputValue(input);
  }

  clearInputValue = (input: HTMLInputElement): void => {
    input.value = '';
  }

  addTodo = (title: string): void => {
    const todo = new Todo(title);
    this.todos.push(todo);
  }
}
