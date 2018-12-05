import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  //properties: Property[];

  location;
  propertyType;
  bedrooms;
  bathrooms;
  otherRooms;

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {}

  search() {
    console.log("start searching");
    var properties = Array();
    this.propertyService.getAllProperties().subscribe((values) => {
      for (var currentProperty of values){
        if (this.location!==undefined && currentProperty.location===this.location){
          properties.push(currentProperty);
          continue;
        };
        if (this.propertyType!==undefined && currentProperty.propertyType===this.propertyType){
          properties.push(currentProperty);
          continue;
        };
        if (this.bedrooms!==undefined && currentProperty.bedrooms===this.bedrooms){
          properties.push(currentProperty);
          continue;
        };
        if (this.bathrooms!==undefined && currentProperty.bathrooms===this.bathrooms){
          properties.push(currentProperty);
          continue;
        };
        if (this.otherRooms!==undefined && currentProperty.otherRooms===this.otherRooms){
          properties.push(currentProperty);
          continue;
        };
      }
      this.propertyService.setSearchProperties(properties);
      this.propertyService.getSearchProperties();
    });
    this.propertyService.getSearchProperties();
  }
}
