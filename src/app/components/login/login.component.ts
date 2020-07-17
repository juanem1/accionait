import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  invalidCredentials = false;

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    public router: Router) {}

  ngOnInit(): void {}

  /**
   * When form is submit
   */
  onSubmit() {
    if (this.as.isValid(this.loginForm.value) ) {
      this.router.navigate(['/search']);
    } else {
      this.invalidCredentials = true
    }
  }

}
