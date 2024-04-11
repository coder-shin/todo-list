import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [
    new Todo('hello 1'),
    new Todo('hello 2'),
    new Todo('hello 3'),
  ]
}
