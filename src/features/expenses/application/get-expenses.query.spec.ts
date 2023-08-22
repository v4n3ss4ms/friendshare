import { GetExpensesQuery } from './get-expenses.query';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local.repository';
import { TestBed } from '@angular/core/testing';
import { UsersLocalRepository } from '../../users/infrastructure/users-local.repository';
import { USERS_REPOSITORY } from '../../users/application/users.injection-tokens';
import { EXPENSES_REPOSITORY } from './expenses.injection-tokens';

const expensesLocalRepository = new ExpensesLocalRepository();
const getExpenses: GetExpensesQuery = new GetExpensesQuery(expensesLocalRepository);

describe('GetExpenses', () => {
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
    jest.spyOn(expensesLocalRepository, 'getAll');
  });

  it('should return a list of expenses', () => {
    getExpenses.execute();
    expect(expensesLocalRepository.getAll).toHaveBeenCalled();
  });
});
