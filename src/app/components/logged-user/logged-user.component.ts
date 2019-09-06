import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {UserModel} from '../../shared/models/user.model';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  loggedUser: UserModel = new UserModel();


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.userService.getLoggedUser().subscribe(user => this.loggedUser = user);
  }

}
