import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Property[];

  constructor(public propertyService: PropertyService) {
    this.propertyService.getAllProperties().subscribe((values) => {
      this.properties = values;
    });
  }

  ngOnInit() {}
}
