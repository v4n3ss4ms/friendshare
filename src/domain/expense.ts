import { Currency } from './currency';

export interface Expense {
  id: Number;
  name: string;
  amount: Number;
  currency: Currency
  date: Number; // millisecs timestamp
  userId: Number;
}
