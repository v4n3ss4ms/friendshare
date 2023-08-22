import { Currency } from './currency';

export class MonetaryValue {
  private constructor(public readonly value: number, private readonly currency: Currency) {}

  static create({ value, currency }: { value: number; currency: Currency }) {
    return new MonetaryValue(value, currency);
  }

  format() {
    return `${this.value} ${this.currency}`;
  }

  isPositive() {
    return this.value > 0;
  }
}
