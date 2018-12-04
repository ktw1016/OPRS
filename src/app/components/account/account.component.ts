import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/user-account';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  currUser: UserAccount;

  // get the userid of the currently signed in user
  constructor (public as: AuthService) {
  }


  ngOnInit() {
    this.currUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.currUser);
  }

}
