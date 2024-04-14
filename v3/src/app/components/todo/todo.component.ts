import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo[todo]',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('editInputRef') editInputRef!: ElementRef;

  editable: boolean = false;

  editStart = (): void => {
    this.editable = true;

    setTimeout(() => {
      this.focusAtInputEnd(this.editInputRef);
    }, 0);
  }

  focusAtInputEnd = (editInputRef: ElementRef): void => {
    const editInputElement = editInputRef.nativeElement;
    editInputElement.focus();
    editInputElement.setSelectionRange(editInputElement.value.length, editInputElement.value.length);
  }

  editDone = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    this.todo.setTitle(input.value);
    this.editable = false;
  }

  remove = (todoId: number): void => {
    this.removeEvent.emit(todoId);
  }
}
