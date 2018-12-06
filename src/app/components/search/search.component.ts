import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  properties: Property[];
  resultProperties: Property[];

  location;
  propertyType;
  bedrooms;
  bathrooms;
  otherRooms;

  constructor(public propertyService: PropertyService, public router: Router) {
    this.resultProperties = [];
    this.properties = [];
    this.propertyService.getAllProperties().subscribe(values => {
      this.properties = values;
    });
  }

  ngOnInit() {}

  search() {
    this.resultProperties = [];
    for (const property of this.properties) {
      if (property.location === this.location) {
        this.addToResultList(property);
      }
      if (property.propertyType === this.propertyType) {
        this.addToResultList(property);
      }
      if (property.bedrooms === this.bedrooms) {
        this.addToResultList(property);
      }
      if (property.bathrooms === this.bathrooms) {
        this.addToResultList(property);
      }
      if (property.otherRooms === this.otherRooms) {
        this.addToResultList(property);
      }
    }
  }

  addToResultList(property: Property) {
    if (this.resultProperties.indexOf(property) === -1) {
      this.resultProperties.push(property);
      console.log(this.resultProperties);
    }
  }
}
