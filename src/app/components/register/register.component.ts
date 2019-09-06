import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {UserPostModel} from '../../shared/models/userPost.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserPostModel = new UserPostModel();

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authenticationService: AuthService,
              private router: Router) {
    // redirect to home if already logged in
    if (this.authenticationService.isAuth()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.registerUser(this.registerForm.value).subscribe(
      rsp => {
        alert("Registration successful!!")
        this.router.navigate(['/login']);
      }
    );

  }

}
