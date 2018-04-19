import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: 'contacts-list',
  component: ContactsListComponent,
}, {
  path: 'contacts-add',
  component: ContactsAddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
