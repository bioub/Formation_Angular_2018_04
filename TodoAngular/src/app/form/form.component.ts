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

  @Output()
  public toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    const clone = {...this.newTodo};
    this.create.emit(clone);
  }

  toggleAll(checked) {
    this.toggle.emit(checked);
  }
}
