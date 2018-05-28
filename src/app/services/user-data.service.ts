import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {

  private apiUrl = `https://testproj-4ecf9.firebaseio.com/`;
  constructor(private http: HttpClient) { }

  addUser(data) {
    return this.http.post(`${this.apiUrl}users.json`, data);
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}users.json`);
  }
}
