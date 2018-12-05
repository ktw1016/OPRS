import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  property: Property = new Property();
  constructor(public propertyService: PropertyService) {}

  ngOnInit() {}

  addProperty() {
    console.log(this.property);
    this.propertyService.addProperty(this.property);
  }
}
