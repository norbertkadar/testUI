import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  loginURL: string = 'https://localhost:44391/api/users/authenticate';

  constructor(private http: HttpClient) {
  }

  isAuth() {
    return localStorage.getItem('currentUser') != null;
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

  setToken(token: string) {
    localStorage.setItem('currentUser', token);
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginURL, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', user.token);
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    if (this.getToken() == null) {
      alert('You have successfully logget out!');
    }
  }

}
