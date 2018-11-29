import { UserAccount } from './user-account';

export class Agent extends UserAccount {
  private agency: string;

  constructor(firstName: string, lastName: string, email: string, agency: string) {
    super(firstName, lastName, email);
    this.agency = agency;
  }
}
