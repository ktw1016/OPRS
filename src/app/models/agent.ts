import { UserAccount } from './user-account';

export class Agent extends UserAccount {
  agency: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    agency: string
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.agency = agency;
  }
}
