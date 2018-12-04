import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { UserAccount } from '../models/user-account';
import { Owner } from '../models/owner';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: UserAccount;

  constructor(public afAuth: AngularFireAuth, public router: Router, public accountService: AccountService) {}

  createAccount(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  getCurrentUser(): UserAccount {
    return this.currentUser;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((value) => {
      this.accountService.getAccount(value.user.uid).subscribe((user) => {
        if (user.type === 'Owner') {
          this.currentUser = user as Owner;
        } else {
          this.currentUser = user as Customer;
        }
        this.router.navigate(['/']);
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
