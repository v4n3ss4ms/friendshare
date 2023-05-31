import { Currency } from '../../core/domain/currency';

export interface Balance {
  totalExpenses: number;
  balance: number;
  currency: Currency;
}
