import { Currency } from '../../core/domain/currency';
export type Milliseconds = number;

export interface Expense {
  id: number;
  name: string;
  amount: number;
  currency: Currency
  date: Milliseconds;
  userId: number;
}
