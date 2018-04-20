import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('/users');
  }

  getById(id) {
    return this.httpClient.get(`/users/${id}`);
  }

  add(contact) {
    return this.httpClient.post('/users', contact);
  }
}
