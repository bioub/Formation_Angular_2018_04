import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styles: []
})
export class CopyrightComponent implements OnInit {

  public year = new Date();

  @Input()
  public company = '';

  constructor() { }

  ngOnInit() {
  }

}
