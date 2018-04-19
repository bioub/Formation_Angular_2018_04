import { Todo } from './../todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor() { }

  ngOnInit() {

  }

}
