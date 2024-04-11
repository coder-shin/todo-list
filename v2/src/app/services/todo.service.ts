import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _latestId = 0;

  constructor() { }

  generateTodo = (title: string, done: boolean = false): Todo => {
    const todo =  {
      id: this.getLatestId(),
      title,
      done
    }
    this.increaseLatestId();

    return todo;
  }

  increaseLatestId = (): void => {
    this._latestId++;
  }

  getLatestId = (): number => {
    return this._latestId;
  }
}
