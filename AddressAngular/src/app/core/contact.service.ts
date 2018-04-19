import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getById(id) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  add(contact) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', contact);
  }
}
