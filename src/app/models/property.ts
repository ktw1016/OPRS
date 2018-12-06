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
  streetName: string;
  postalCode: string;
  province: string;
  country: string;
  location: Location;
  bedrooms: number;
  bathrooms: number;
  otherRooms: number;
  rent: number;
  isActive: boolean;

  constructor() {
    this.photoURLs = [];
    this.isActive = true;
  }
}
