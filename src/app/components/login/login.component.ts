import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["users"]);
        },
        response => {
          alert("Username or Password Incorrect !!!!!!!!");
          this.username="";
          this.password="";
        });
  }

}
