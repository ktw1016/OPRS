import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/models/user-account';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-owner-property-list',
  templateUrl: './owner-property-list.component.html',
  styleUrls: ['./owner-property-list.component.scss']
})
export class OwnerPropertyListComponent implements OnInit {
  ownerProperties: [];
  signedIn: Boolean;

  constructor() {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.signedIn = true;
      let currUser = JSON.parse(localStorage.getItem('user'));
      this.ownerProperties = currUser.propertyList;
      console.log(this.ownerProperties);
    } else {
      this.signedIn = false;
    }

  }

  ngOnInit() {
  }

}
