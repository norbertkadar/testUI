import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {UserModel} from '../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersData: UserModel[] =[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.service.getAllUsers().subscribe(rsp=> {
      this.usersData = rsp
    });
  }

}
