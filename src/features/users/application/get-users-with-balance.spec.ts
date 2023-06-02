import {GetUsersWithBalance} from './get-users-with-balance';
import {User} from '../domain/user';
import {Expense} from '../../expenses/domain/expense';
import {Currency} from '../../core/domain/currency';
import {UserWithBalance} from '../domain/userWithBalance';

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
    user: {
      id: 1,
      name: 'Paco',
    },
    balance: {
      totalExpenses: 140,
      balanceAmount: 75.8,
      currency: Currency.euro,
    }
  },
  {
    user: {
      id: 6,
      name: 'María',
    },
    balance: {
      totalExpenses: 53.8,
      balanceAmount: -10.4,
      currency: Currency.euro,
    }
  },
  {
    user: {
      id: 11,
      name: 'Manolo',
    },
    balance: {
      totalExpenses: 63,
      balanceAmount: -1.2,
      currency: Currency.euro,
    }
  },
  {
    user: {
      id: 25,
      name: 'Ana',
    },
    balance: {
      totalExpenses: 0,
      balanceAmount: -64.2,
      currency: Currency.euro,
    }
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
