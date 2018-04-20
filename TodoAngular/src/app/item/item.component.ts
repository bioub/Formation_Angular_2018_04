import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(todo) {
    this.remove.emit(todo);
  }

}
