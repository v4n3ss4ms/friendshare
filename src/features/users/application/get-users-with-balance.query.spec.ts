import { GetUsersWithBalanceQuery } from './get-users-with-balance.query';
import { User } from '../domain/user';
import { Expense } from '../../expenses/domain/expense';
import { Currency } from '../../../core/money/currency';
import { UserWithBalance } from '../domain/user-with-balance';
import { MonetaryValue } from '../../../core/money/monetary-value';

const getUsersWithBalance: GetUsersWithBalanceQuery = new GetUsersWithBalanceQuery();

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
    amount: MonetaryValue.create({ value: 140, currency: Currency.euro }),
    date: 1680290914000,
    userId: 1,
  },
  {
    id: 65,
    name: 'patatas fritas',
    amount: MonetaryValue.create({ value: 6, currency: Currency.euro }),
    date: 1680802792290,
    userId: 11,
  },
  {
    id: 567,
    name: 'cine',
    amount: MonetaryValue.create({ value: 57, currency: Currency.euro }),
    date: 1680365052000,
    userId: 11,
  },
  {
    id: 51,
    name: 'aperitivo',
    amount: MonetaryValue.create({ value: 53.8, currency: Currency.euro }),
    date: 1679061634000,
    userId: 6,
  },
];

const expectedUsersWithBalance: UserWithBalance[] = [
  {
    user: {
      id: 1,
      name: 'Paco',
    },
    balance: MonetaryValue.create({ value: 75.8, currency: Currency.euro }),
  },
  {
    user: {
      id: 6,
      name: 'María',
    },
    balance: MonetaryValue.create({ value: -10.4, currency: Currency.euro }),
  },
  {
    user: {
      id: 11,
      name: 'Manolo',
    },
    balance: MonetaryValue.create({ value: -1.2, currency: Currency.euro }),
  },
  {
    user: {
      id: 25,
      name: 'Ana',
    },
    balance: MonetaryValue.create({ value: -64.2, currency: Currency.euro }),
  },
];

describe('GetUsersWithBalanceQuery', () => {
  it('should return an users with balance list', () => {
    const usersWithBalance: UserWithBalance[] = getUsersWithBalance.execute(expensesDataMocked, usersDataMocked);
    expect(usersWithBalance).toEqual(expectedUsersWithBalance);
  });
});
