import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  signedIn: Boolean;

  constructor(public authService: AuthService, public router: Router) {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.signedIn = true;
    } else {
      this.signedIn = false;
    }
  }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
    this.signedIn = false;
    this.router.navigate(['/']);
  }

}
