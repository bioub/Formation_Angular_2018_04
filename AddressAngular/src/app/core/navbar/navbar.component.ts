import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showMenu = false;
  public showContacts = false;

  constructor() { }

  ngOnInit() {
  }

  toggleContacts(event: Event) {
    event.preventDefault();
    this.showContacts = !this.showContacts;
  }
}
