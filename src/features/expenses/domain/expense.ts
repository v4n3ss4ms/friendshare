import { MonetaryValue } from '../../../core/money/monetary-value';

export type Milliseconds = number;

export interface Expense {
  id: number;
  name: string;
  amount: MonetaryValue;
  date: Milliseconds;
  userId: number;
}
