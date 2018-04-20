import { ContactService } from './../../core/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Contact } from '../contact';

@Component({
  selector: 'ad-contacts-update',
  templateUrl: './contacts-update.component.html',
  styleUrls: ['./contacts-update.component.scss']
})
export class ContactsUpdateComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => this.contactService.getById(params.id))
    ).subscribe((contact) => {
        this.contact = contact;
    });
  }

  update() {
    this.contactService.update(this.contact).subscribe((contact) => {
      this.contactService.refresh.emit(contact);
      this.router.navigate(['contacts', contact.id]);
    });
  }

}
