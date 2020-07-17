import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private as: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.as.logOut();
    this.router.navigate(['/']);
  }
}
