import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverIp: string = environment.baseUrl;
  baseIp: string = this.serverIp + "/auth";
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>("");
  private userAdmin = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { 
    if(localStorage.getItem('username')) {
      this.loggedIn.next(true);
      this.username.next(localStorage.getItem('username'));
      this.userAdmin.next(this.getAdminStorage());
    }
  }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.loggedIn.next(false);
    this.userAdmin.next(false);
    this.username.next("");
    this.router.navigate(["login"]);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getUsername() {
    return this.username.asObservable();
  }

  get getAdmin(): Observable<boolean> {
    return this.userAdmin.asObservable();
  }

  getAdminStorage(): boolean {
    return JSON.parse(localStorage.getItem('currentUser')).admin as boolean;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseIp}`, { username: username, password: password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('username', username);
            this.loggedIn.next(true);
            this.username.next(username);
            this.userAdmin.next(user.admin);
            return user;
        }
    }));
  }
}
