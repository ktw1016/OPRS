import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  private customersCollection: AngularFirestoreCollection<Customers>;
  account: Observable<Customers | null>;
  userAuthId: string;


  // get the userid of the currently signed in user
  constructor(public afAuth: AngularFireAuth, public router: Router) {

  }


  ngOnInit() {
  }

  // this should get all account info, specified by the account document id
  getAccount() {
    if (this.afAuth.auth.currentUser) {
      this.userAuthId = this.afAuth.auth.currentUser.uid;
    }

    return this.customersCollection.doc(this.userAuthId).ref.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          console.log("No such document!");
      }
    })
  }

}
