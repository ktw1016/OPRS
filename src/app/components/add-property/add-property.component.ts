import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address';
import { Property, PropertyType, Location } from '../../models/property';
import { PropertyService } from 'src/app/services/property.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  streetAddress: string;
  postalCode: string;
  province: string;
  country: string;

  photoURLs: Array<string>;
  propertyEnum: PropertyType;
  address: Address;
  locationEnum: Location;
  bedrooms: number;
  bathrooms: number;
  otherRooms: number;
  rent: number;
  isActive = true;

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {}

  addProperty() {
    this.address = new Address(
      this.streetAddress,
      this.postalCode,
      this.province,
      this.country
    );
    const property = new Property();
    //photoURLs = []
    property.photoURLs = ["something"],
    property.propertyType = this.propertyEnum,
    property.address = this.address,
    property.location = this.locationEnum,
    property.bedrooms = this.bedrooms,
    property.bathrooms = this.bathrooms,
    property.otherRooms = this.otherRooms,
    property.rent = this.rent,
    property.isActive = this.isActive

    this.propertyService.addProperty(property);
  }

}
