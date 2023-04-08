import { User } from './user';
import { Currency } from './currency';

export interface UserWithBalance extends User {
  totalExpenses: number;
  balance: number;
  currency: Currency;
}
