import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountCollection: AngularFirestoreCollection<UserAccount>;
  accounts: Observable<UserAccount[]>;

  constructor(public afs: AngularFirestore) {
    this.accountCollection = afs.collection<UserAccount>('accounts');
    this.accounts = this.accountCollection.valueChanges();
  }

  addAccount(account: UserAccount) {
    this.accountCollection.doc<UserAccount>(account.userId).set(Object.assign({}, account));
  }

  getAccount(id: string): Observable<UserAccount> {
    return this.accountCollection.doc<UserAccount>(id).valueChanges();
  }
}
