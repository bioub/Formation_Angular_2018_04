import { Todo } from '../todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public todos: Todo[] = [
    {
      done: false,
      value: 'Item 1',
    },
    {
      done: true,
      value: 'Item 2',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleAll(checked) {
    this.todos.forEach((todo) => todo.done = checked);
  }
}
