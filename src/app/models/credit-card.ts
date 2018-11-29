export enum CardType {
  Visa = 'VISA',
  Mastercard = 'Mastercard'
}

export class CreditCard {
  private cardType: CardType;
  private cardNumber: string;
  private cardHolder: string;
  private expiryMonth: number;
  private expiryYear: number;

  constructor(
    cardType: CardType,
    cardNumber: string,
    cardHolder: string,
    expiryMonth: number,
    expiryYear: number
  ) {
    this.cardType = cardType;
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
  }
}
