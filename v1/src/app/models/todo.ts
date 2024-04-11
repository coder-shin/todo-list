export class Todo {
  private static _latestId = 0;

  id: number;
  title: string;
  done: boolean;

  constructor(title: string, done: boolean = false) {
    this.id = Todo._latestId;
    Todo._latestId++;
    this.title = title;
    this.done = done;
  }

  toggleDone = (): void => {
    this.done = !this.done;
  }
}
