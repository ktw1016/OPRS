import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Customer } from '../models/customer';
import { Owner } from '../models/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private customerCollection: AngularFirestoreCollection<Customer>;
  private ownerCollection: AngularFirestoreCollection<Owner>;
  customers: Observable<Customer[]>;
  owners: Observable<Owner[]>;

  constructor(public afs: AngularFirestore) {
    this.customerCollection = afs.collection<Customer>('customers');
    this.ownerCollection = afs.collection<Owner>('owners');
    this.customers = this.customerCollection.valueChanges();
    this.owners = this.ownerCollection.valueChanges();
  }

  addCustomer(customer: Customer) {
    this.customerCollection.doc(customer.userId).set(Object.assign({}, customer));
  }

  addOwner(owner: Owner) {
    this.ownerCollection.doc(owner.userId).set(Object.assign({}, owner));
  }

  getCustomer(id: string): Observable<any> {
    return this.customerCollection.doc(id).valueChanges();
  }
  getOwner(id: string): Observable<any> {
    return this.ownerCollection.doc(id).valueChanges();
  }

}
