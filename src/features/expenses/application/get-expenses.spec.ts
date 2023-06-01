import { GetExpenses } from './get-expenses';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';

const expensesLocalRepository = new ExpensesLocalRepository();
const getExpenses: GetExpenses = new GetExpenses(expensesLocalRepository);

describe('GetExpenses', () => {
  beforeEach( () => {
    jest.spyOn(expensesLocalRepository, 'getAll');
  });

  it('should return a list of expenses', () => {
    getExpenses.execute();
    expect(expensesLocalRepository.getAll).toHaveBeenCalled();
  });
});
