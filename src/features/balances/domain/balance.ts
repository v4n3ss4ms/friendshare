import { Currency } from '../../core/domain/currency';

export interface Balance {
  totalExpenses: number;
  balanceAmount: number;
  currency: Currency;
}
