import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Owner } from 'src/app/models/owner';
import { AuthService } from 'src/app/services/auth.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  maxRent: number;
  userType: string;

  constructor(public authService: AuthService, public accountService: AccountService, public router: Router) {}

  ngOnInit() {}

  register() {
    this.authService.createAccount(this.email, this.password)
      .then(newUser => {
        if (this.userType === 'Customer') {
          const customer = new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.maxRent
          );
          customer.userId = newUser.user.uid;
          this.accountService.addAccount(customer);
          this.router.navigate(['/']);
        } else {
          const owner = new Owner(
            this.firstName,
            this.lastName,
            this.email
          );
          owner.userId = newUser.user.uid;
          this.accountService.addAccount(owner);
          this.router.navigate(['/']);
        }
      });
  }
}
