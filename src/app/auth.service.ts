import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() onLogin: EventEmitter<any> = new EventEmitter();

  baseIp: string = "http://127.0.0.1:8080/auth";

  constructor(private http: HttpClient, private router: Router) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseIp}`, { username: username, password: password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }



        return user;
    }));
  }
}
