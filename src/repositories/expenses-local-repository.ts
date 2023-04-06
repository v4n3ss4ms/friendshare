import { Expense } from '../domain/expense';
import { ExpensesRepository } from '../domain/expenses-repository';
import { Currency } from '../domain/currency'; 

export class ExpensesLocalRepository implements ExpensesRepository {
  data = [
    {
      id: 433,
      name: 'cena',
      amount: 140,
      currency: Currency.euro,
      date: 1680290914000,
      user: 'Paco',
    },
    {
      id: 65,
      name: 'patatas fritas',
      amount: 6,
      currency: Currency.euro,
      date: 1680802792290,
      user: 'María',
    },
    {
      id: 51,
      name: 'aperitivo',
      amount: 53.8,
      currency: Currency.euro,
      date: 1679061634000,
      user: 'María',
    },
  ];
  findAll(): Expense[] {
    return this.data;
  }
}
