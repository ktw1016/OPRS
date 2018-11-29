export class Address {
  private streetName: string;
  private postalCode: string;
  private province: string;
  private country: string;

  constructor(
    streetName: string,
    postalCode: string,
    province: string,
    country: string
  ) {
    this.streetName = streetName;
    this.postalCode = postalCode;
    this.province = province;
    this.country = country;
  }
}
