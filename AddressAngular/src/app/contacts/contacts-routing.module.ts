import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent,
  children: [
    {
      path: 'add',
      component: ContactsAddComponent,
    },
    {
      path: ':id',
      component: ContactsShowComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
