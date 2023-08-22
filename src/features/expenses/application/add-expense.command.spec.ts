import { AddExpenseCommand } from './add-expense.command';
import { Expense } from '../domain/expense';
import { Currency } from '../../../core/money/currency';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local.repository';
import { TestBed } from '@angular/core/testing';
import { UsersLocalRepository } from '../../users/infrastructure/users-local.repository';
import { USERS_REPOSITORY } from '../../users/application/users.injection-tokens';
import { EXPENSES_REPOSITORY } from './expenses.injection-tokens';
import { MonetaryValue } from '../../../core/money/monetary-value';

const expensesLocalRepository = new ExpensesLocalRepository();
const addExpense = new AddExpenseCommand(expensesLocalRepository);

const expenseData: Expense = {
  id: 567,
  name: 'flores',
  amount: MonetaryValue.create({ value: 35, currency: Currency.euro }),
  date: 1685365588694,
  userId: 1,
};

describe('AddExpense', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: USERS_REPOSITORY,
          useClass: UsersLocalRepository,
        },
        {
          provide: EXPENSES_REPOSITORY,
          useClass: ExpensesLocalRepository,
        },
      ],
    }).compileComponents();
    jest.spyOn(expensesLocalRepository, 'addExpense');
  });
  it('should add an expense', () => {
    addExpense.execute(expenseData);
    expect(expensesLocalRepository.addExpense).toHaveBeenCalledWith(expenseData);
  });
});
