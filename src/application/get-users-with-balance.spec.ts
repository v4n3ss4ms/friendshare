import { GetUsersWithBalance } from './get-users-with-balance';
import { User } from '../domain/user';
import { Expense } from '../domain/expense';
import { Currency } from '../domain/currency';
import { UserWithBalance } from '../domain/userWithBalance';

const getUsersWithBalance: GetUsersWithBalance = new GetUsersWithBalance();

const usersDataMocked: User[] = [
  {
    id: 1,
    name: 'Paco',
  },
  {
    id: 6,
    name: 'María',
  },
  {
    id: 11,
    name: 'Manolo',
  },
  {
    id: 25,
    name: 'Ana',
  },
];

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

const expectedUsersWithBalance: UserWithBalance[] = [
  {
    id: 1,
    name: 'Paco',
    totalExpenses: 140,
    balance: 75.8,
    currency: Currency.euro,
  },
  {
    id: 6,
    name: 'María',
    totalExpenses: 53.8,
    balance: -10.4,
    currency: Currency.euro,
  },
  {
    id: 11,
    name: 'Manolo',
    totalExpenses: 63,
    balance: -1.2,
    currency: Currency.euro,
  },
  {
    id: 25,
    name: 'Ana',
    totalExpenses: 0,
    balance: -64.2,
    currency: Currency.euro,
  },
];

describe('GetUsersWithBalance', () => {
  it('should return an users with balance list', () => {
    const usersWithBalance: UserWithBalance[] = getUsersWithBalance.execute(
      expensesDataMocked,
      usersDataMocked
    );
    expect(usersWithBalance).toEqual(expectedUsersWithBalance);
  });
});
