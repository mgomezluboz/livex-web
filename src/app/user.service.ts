import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/usuario';
import { environment } from '../environments/environment';
import { Rol } from './model/rol';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverIp: string = environment.baseUrl;
  baseIp: string = this.serverIp + "usuarios";

  constructor(private http: HttpClient) { }

getAll() {
    return this.http.get<User[]>(`${this.baseIp}`);
}

getById(id: string) {
    return this.http.get<User>(`${this.baseIp}/` + id);
}

register(user: User) {
    return this.http.post(`${this.baseIp}/`, user);
}

update(user: User) {
    return this.http.put(`${this.baseIp}`, user);
}

delete(id: string) {
    return this.http.delete(`${this.baseIp}/` + id);
}

getRoles() {
    return this.http.get<Rol[]>(`${this.baseIp}/roles`);
}
}
