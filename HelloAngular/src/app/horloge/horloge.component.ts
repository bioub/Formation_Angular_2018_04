import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
})
export class HorlogeComponent implements OnInit {

  public now = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
