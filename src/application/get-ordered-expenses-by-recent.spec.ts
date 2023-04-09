import { GetOrderedExpensesByRecent } from './get-ordered-expenses-by-recent';
import { Expense } from '../domain/expense';
import { Currency } from '../domain/currency';

const getOrderedExpensesByRecent: GetOrderedExpensesByRecent = new GetOrderedExpensesByRecent();
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
const expectedExpensesDataMocked: Expense[] = [
  {
      "id": 65,
      "name": "patatas fritas",
      "amount": 6,
      "currency": Currency.euro,
      "date": 1680802792290,
      "userId": 11
  },
  {
      "id": 567,
      "name": "cine",
      "amount": 57,
      "currency": Currency.euro,
      "date": 1680365052000,
      "userId": 11
  },
  {
      "id": 433,
      "name": "cena",
      "amount": 140,
      "currency": Currency.euro,
      "date": 1680290914000,
      "userId": 1
  },
  {
      "id": 51,
      "name": "aperitivo",
      "amount": 53.8,
      "currency": Currency.euro,
      "date": 1679061634000,
      "userId": 6
  }
]
describe('GetOrderedExpensesByRecent', () => {
  it('should return an ordered by most recent list of expenses', () => {
    const expectedExpenses: Expense[] = getOrderedExpensesByRecent.execute(expensesDataMocked);
    expect(expectedExpenses).toEqual(expectedExpensesDataMocked);
  });
});

