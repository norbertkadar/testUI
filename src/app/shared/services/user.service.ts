import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {UserPostModel} from '../models/userPost.model';


@Injectable()
export class UserService {

  usersURL: string = "https://localhost:44391/api/users";

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersURL);
  }

  registerUser(user: UserPostModel): Observable<UserPostModel>{
    return this.http.post<UserPostModel>(this.usersURL + '/register', user);
  }

  getLoggedUser():Observable<UserModel> {
    return this.http.get<UserModel>(this.usersURL + '/getLoggedUser');
  }
}
