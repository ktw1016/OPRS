import { UserAccount } from './user-account';
import { CreditCard } from './credit-card';
import { Property } from './property';

export class Customer extends UserAccount {
  maxRent: number;
  visitationList: Array<Property>;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    maxRent: number
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.maxRent = maxRent;

  }
}
