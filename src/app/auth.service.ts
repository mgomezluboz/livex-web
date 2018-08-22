import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseIp: string = "http://127.0.0.1:8080/auth";
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private router: Router) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.username.next("");
    this.router.navigate(["login"]);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getUsername() {
    return this.username.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseIp}`, { username: username, password: password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.loggedIn.next(true);
            this.username.next(username);
            return user;
        }
    }));
  }
}
