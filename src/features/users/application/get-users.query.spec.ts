import { GetUsersQuery } from './get-users.query';
import { UsersLocalRepository } from '../infrastructure/users-local.repository';
import { TestBed } from '@angular/core/testing';
import { ExpensesLocalRepository } from '../../expenses/infrastructure/expenses-local.repository';
import { USERS_REPOSITORY } from './users.injection-tokens';
import { EXPENSES_REPOSITORY } from '../../expenses/application/expenses.injection-tokens';

const usersLocalRepository = new UsersLocalRepository();
const getUsers: GetUsersQuery = new GetUsersQuery(usersLocalRepository);

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
    jest.spyOn(usersLocalRepository, 'getAll');
  });

  it('should return a list of users', () => {
    getUsers.execute();
    expect(usersLocalRepository.getAll).toHaveBeenCalled();
  });
});
