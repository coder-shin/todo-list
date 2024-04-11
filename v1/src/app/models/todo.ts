export class Todo {
  title: string;
  done: boolean;

  constructor(title: string, done: boolean = false) {
    this.title = title;
    this.done = done;
  }

  toggleDone = (): void => {
    this.done = !this.done;
  }
}
