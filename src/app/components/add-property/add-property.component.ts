import { Component, OnInit } from '@angular/core';
import {PropertyType, Location } from '../../models/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  propertyEnum: PropertyType;
  locationEnum: Location;

  rent: number;
  constructor() { }

  ngOnInit() {
  }

  addProperty() {}

}
