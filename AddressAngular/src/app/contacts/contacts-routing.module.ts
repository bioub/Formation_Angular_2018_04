import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: '',
  component: ContactsComponent,
  data: {
    title: 'Liste des contacts',
  },
  children: [
    {
      path: 'add',
      component: ContactsAddComponent,
      data: {
        title: 'Ajouter un contact',
      },
    },
    {
      path: ':id',
      component: ContactsShowComponent,
      data: {
        title: 'Afficher un contact',
      },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
