import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoList } from '../../models/todo-list';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todoList: TodoList = new TodoList([
    new Todo('default todo1'),
    new Todo('default todo2'),
    new Todo('default todo3'),
  ]);

  addTodoByKeyupEnter = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const title: string = input.value;

    if (!title) {
      return;
    }

    this.todoList.addTodo(title);
    this.clearInputValue(input);
  }

  clearInputValue = (input: HTMLInputElement): void => {
    input.value = '';
  }
}
