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
  searchProperties: Property[];

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
  }

  getProperty(id: string): Observable<Property> {
    return this.propertyCollection.doc<Property>(id).valueChanges();
  }

  setSearchProperties(property: Property[]){
    this.searchProperties = property;
    console.log(this.searchProperties)
  }
  getSearchProperties(){
    console.log(this.searchProperties)
    return this.searchProperties;
  }
}
