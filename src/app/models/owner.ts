import { UserAccount } from './user-account';
import { Property } from './property';

export class Owner extends UserAccount {
  propertyList: Array<Property>;

  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = 'Owner';
    this.propertyList = [];
  }
}
