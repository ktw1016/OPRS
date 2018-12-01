import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  private propertiesCollection: AngularFirestoreCollection<Property>;
  properties: Observable<Property[]>;

  constructor(private afs: AngularFirestore) {
    this.propertiesCollection = afs.collection<Property>('properties');
    this.properties = this.propertiesCollection.valueChanges();
  }

  ngOnInit() {}
}
