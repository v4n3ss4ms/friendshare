import { Currency } from './currency';

export interface Expense {
  id: number;
  name: string;
  amount: number;
  currency: Currency
  date: number; // millisecs timestamp
  userId: number;
}
