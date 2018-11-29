export class UserAccount {
  private userId: string;
  private firstName: string;
  private lastName: string;
  private email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}