import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) {}
  ngOnInit() {}

  login() {
    this.authService.login(this.email, this.password);
  }

  logout() {
    this.authService.logout();
  }
}
