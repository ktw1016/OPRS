import { Address } from './address';

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment'
}

export enum Location {
  Ottawa = 'Ottawa',
  Toronto = 'Toronto',
  Montreal = 'Montreal',
  Vancouver = 'Vancouver',
  Kingston = 'Kingston',
  London = 'London'
}

export class Property {
  propertyId: string;
  photoURLs: Array<string>;
  propertyType: PropertyType;
  address: Address;
  location: Location;
  bedrooms: number;
  bathrooms: number;
  otherRooms: number;
  rent: number;
  isActive: boolean;

  constructor(
    photoURLs: Array<string>,
    propertyType: PropertyType,
    address: Address,
    location: Location,
    bedrooms: number,
    bathrooms: number,
    otherRooms: number,
    rent: number
  ) {
    this.photoURLs = photoURLs;
    this.propertyType = propertyType;
    this.address = address;
    this.location = location;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.otherRooms = otherRooms;
    this.rent = rent;
    this.isActive = true;
  }
}
