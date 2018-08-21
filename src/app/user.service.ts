import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseIp: string = "http://127.0.0.1:8080/users";

  constructor(private http: HttpClient) { }

getAll() {
    return this.http.get<User[]>(`${this.baseIp}`);
}

getById(id: number) {
    return this.http.get(`${this.baseIp}` + id);
}

register(user: User) {
    return this.http.post(`${this.baseIp}/register`, user);
}

update(user: User) {
    return this.http.put(`${this.baseIp}/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`${this.baseIp}/` + id);
}
}
