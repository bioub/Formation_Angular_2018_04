import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styles: []
})
export class ButtonToggleComponent implements OnInit {

  public index = 0;

  @Input() values = ['On', 'Off'];
  @Output() selectionChange = new EventEmitter<string>();
  @Input() selection = this.values[this.index];

  constructor() { }

  ngOnInit() {
    this.index = this.values.indexOf(this.selection);
  }

  get value() {
    return this.values[this.index];
  }

  toggle() {
    this.index = (this.index + 1) % this.values.length;
    this.selectionChange.emit(this.values[this.index]);
  }
}
