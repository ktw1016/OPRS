import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Property } from '../models/property';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private propertyCollection: AngularFirestoreCollection<Property>;
  properties: Observable<Property[]>;
  searchProperties: Property[];

  constructor(public afs: AngularFirestore, public router: Router) {
    this.propertyCollection = afs.collection<Property>('properties');
    this.properties = this.propertyCollection.valueChanges();
  }

  getAllProperties(): Observable<Property[]> {
    return this.propertyCollection.valueChanges();
  }

  editProperty(id: string, streetName: string, location: string, propertyType, rent: number, bedrooms: number, bathrooms: number, otherRooms: number){
    console.log(id);
    if(streetName!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        streetName: streetName
      });
    }
    if(location!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        location: location
      });
    }
    if(propertyType!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        propertyType: propertyType
      });
    }
    if(rent!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        rent: rent
      });
    }
    if(bedrooms!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        bedrooms: bedrooms
      });
    }
    if(bathrooms!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        bathrooms: bathrooms
      });
    }
    if(otherRooms!==undefined){
      this.propertyCollection.doc<Property>(id).update({
        otherRooms: otherRooms
      });
    }
  }

  deleteProperty(id: string){
    console.log(id);
    this.propertyCollection.doc<Property>(id).delete();
  }

  addProperty(property: Property) {
    const id = this.afs.createId();
    console.log(id);
    property.propertyId = id;
    this.propertyCollection.doc<Property>(id).set(Object.assign({}, property));
    console.log(this.propertyCollection.doc<Property>(id));
  }

  getProperty(id: string): Observable<Property> {
    return this.propertyCollection.doc<Property>(id).valueChanges();
  }

  setSearchProperties(property: Property[]) {
    this.searchProperties = property;
    console.log(this.searchProperties);
  }
  getSearchProperties() {
    console.log(this.searchProperties);
    return this.searchProperties;
  }
}
