import { Router } from '@angular/router';
import { Contact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/contact.service';

@Component({
  selector: 'ad-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  add() {
    this.contactService.add(this.contact).subscribe((contact) => {
      this.contactService.refresh.emit(contact);
      this.router.navigate(['contacts', contact.id]);
    });
  }
}
