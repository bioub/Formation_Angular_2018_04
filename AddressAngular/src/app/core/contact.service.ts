import { Contact } from './../contacts/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ContactService {

  public refresh = new EventEmitter<Contact>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>('/users');
  }

  getById(id) {
    return this.httpClient.get<Contact>(`/users/${id}`);
  }

  add(contact) {
    return this.httpClient.post<Contact>('/users', contact);
  }

  update(contact) {
    return this.httpClient.put<Contact>(`/users/${contact.id}`, contact);
  }
}
