import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Property } from '../models/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private propertyCollection: AngularFirestoreCollection<Property>;

  constructor(public afs: AngularFirestore) {
    this.propertyCollection = afs.collection<Property>('properties');
  }

  getAllProperties(): Observable<Property[]> {
    return this.propertyCollection.valueChanges();
  }

  deleteProperty(id: string) {
    console.log(id);
    this.propertyCollection.doc<Property>(id).delete();
  }

  addProperty(property: Property) {
    this.propertyCollection.doc<Property>(property.propertyId).set(Object.assign({}, property));
  }

  getProperty(id: string): Observable<Property> {
    return this.propertyCollection.doc<Property>(id).valueChanges();
  }

  createId(): string {
    return this.afs.createId();
  }
}
