import { Address } from './address';

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment'
}

export class Property {
  private propertyId: string;
  private photoURLs: Array<string>;
  private propertyType: PropertyType;
  private address: Address;
  private location: string;
  private bedrooms: number;
  private bathrooms: number;
  private otherRooms: number;
  private rent: number;
  private isActive: boolean;

  constructor(
    photoURLs: Array<string>,
    propertyType: PropertyType,
    address: Address,
    location: string,
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
