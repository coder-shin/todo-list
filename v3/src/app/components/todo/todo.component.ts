import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo[todo]',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter<number>();

  remove = (todoId: number): void => {
    this.removeEvent.emit(todoId);
  }
}
