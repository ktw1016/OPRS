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
  properties: Observable<Property[]>;

  constructor(public afs: AngularFirestore) {
    this.propertyCollection = afs.collection<Property>('properties');
    this.properties = this.propertyCollection.valueChanges();
  }

  getAllProperties(): Observable<Property[]> {
    return this.properties;
  }

  addProperty(property: Property) {
    const id = this.afs.createId();
    console.log(id);
    property.propertyId = id;
    this.propertyCollection.doc<Property>(id).set(Object.assign({}, property));
    console.log(this.propertyCollection.doc<Property>(id));
  }

  editProperty(property: Property){}

  setIsActive(property: Property, isActive: boolean){
    property.isActive = isActive;
  }

  getProperty(id: string): Observable<Property> {
    return this.propertyCollection.doc<Property>(id).valueChanges();
  }
}
