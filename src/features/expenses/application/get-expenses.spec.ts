import { GetExpenses } from './get-expenses';
import { Expense } from '../domain/expense';
import { Currency } from '../../core/domain/currency';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';

const getExpenses: GetExpenses = new GetExpenses(new ExpensesLocalRepository()); // !!
const expensesDataMocked: Expense[] = [
  {
    id: 433,
    name: 'cena',
    amount: 140,
    currency: Currency.euro,
    date: 1680290914000,
    userId: 1,
  },
  {
    id: 65,
    name: 'patatas fritas',
    amount: 6,
    currency: Currency.euro,
    date: 1680802792290,
    userId: 11,
  },
  {
    id: 567,
    name: 'cine',
    amount: 57,
    currency: Currency.euro,
    date: 1680365052000,
    userId: 11,
  },
  {
    id: 51,
    name: 'aperitivo',
    amount: 53.8,
    currency: Currency.euro,
    date: 1679061634000,
    userId: 6,
  },
];

describe('GetExpenses', () => {
  it('should return a list of expenses', () => {
    const expectedExpenses: Expense[] = getExpenses.execute();
    expect(expectedExpenses).toEqual(expensesDataMocked);
  });
});
