import { AddUserCommand } from './add-user.command';
import { User } from '../domain/user';
import { UsersLocalRepository } from '../infrastructure/users-local.repository';
import { TestBed } from '@angular/core/testing';
import { ExpensesLocalRepository } from '../../expenses/infrastructure/expenses-local.repository';
import { USERS_REPOSITORY } from './users.injection-tokens';
import { EXPENSES_REPOSITORY } from '../../expenses/application/expenses.injection-tokens';

const usersLocalRepository = new UsersLocalRepository();
const addUser: AddUserCommand = new AddUserCommand(usersLocalRepository);

const userData: User = {
  id: 18,
  name: 'Pedro',
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
    jest.spyOn(usersLocalRepository, 'addUser');
  });

  it('should add an expense', () => {
    addUser.execute(userData);
    expect(usersLocalRepository.addUser).toHaveBeenCalledWith(userData);
  });
});
