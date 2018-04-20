import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsUpdateComponent } from './contacts-update/contacts-update.component';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent, ContactsAddComponent, ContactsComponent, ContactsShowComponent, ContactsUpdateComponent]
})
export class ContactsModule { }
