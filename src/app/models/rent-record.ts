export class RentRecord {
  customerId: string;
  customerEmail: string;
  propertyId: string;
  rent: number;
  rentalDate: Date;
  rentalTime: Date;

  constructor(
    customerId: string,
    customerEmail: string,
    propertyId: string,
    rent: number,
    rentalDate: Date,
    rentalTime: Date
  ) {
    this.customerId = customerId;
    this.customerEmail = customerEmail;
    this.propertyId = propertyId;
    this.rent = rent;
    this.rentalDate = rentalDate;
    this.rentalTime = rentalTime;
  }
}
