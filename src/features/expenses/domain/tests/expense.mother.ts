import { Expense } from '../expense';
import { MonetaryValue } from '../../../../core/money/monetary-value';
import { Currency } from '../../../../core/money/currency';

export class ExpenseMother {
  static dinner(expense?: Partial<Expense>): Expense {
    return {
      id: 1,
      name: 'Dinner',
      amount: MonetaryValue.create({ value: 80.53, currency: Currency.euro }),
      date: 2012321321,
      userId: 1,
      ...expense,
    };
  }
}
