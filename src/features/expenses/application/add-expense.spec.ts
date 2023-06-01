import { AddExpense } from './add-expense';
import { Expense } from '../domain/expense';
import { Currency } from '../../core/domain/currency';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';

const expensesLocalRepository = new ExpensesLocalRepository();
const addExpense: AddExpense = new AddExpense(expensesLocalRepository);

const expenseData: Expense = {
    id: 567,
    name: 'flores',
    amount: 35,
    currency: Currency.euro,
    date: 1685365588694,
    userId: 1,
  };

describe('AddExpense', () => {
  beforeEach( () => {
    jest.spyOn(expensesLocalRepository, 'addExpense');
  });
  it('should add an expense', () => {
    addExpense.execute(expenseData);
    expect(expensesLocalRepository.addExpense).toHaveBeenCalledWith(expenseData);
  });
});
