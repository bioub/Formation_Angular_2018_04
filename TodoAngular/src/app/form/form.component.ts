import { Todo } from './../todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public newTodo = new Todo();
  public doneAll = false;

  @Output()
  public create = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    const clone = {...this.newTodo};
    this.create.emit(clone);
  }
}
