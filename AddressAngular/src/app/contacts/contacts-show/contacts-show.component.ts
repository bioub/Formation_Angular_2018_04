import { ContactService } from './../../core/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ad-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => this.contactService.getById(params.id))
    ).subscribe((contact) => {
        this.contact = contact;
    });
  }

}
