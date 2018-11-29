import { UserAccount } from './user-account';
import { Property } from './property';

export class Owner extends UserAccount {
  private propertyList: Array<Property>;

  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
    this.propertyList = [];
  }
}
