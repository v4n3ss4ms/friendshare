import { AddUser } from './add-user';
import { User } from '../domain/user';
import { UsersLocalRepository } from '../infrastructure/users-local-repository';

const usersLocalRepository = new UsersLocalRepository();
const addUser: AddUser = new AddUser(usersLocalRepository);

const userData: User = {
  id: 18,
  name: 'Pedro',
};

describe('AddExpense', () => {
  beforeEach( () => {
    jest.spyOn(usersLocalRepository, 'addUser');
  });

  it('should add an expense', () => {
    addUser.execute(userData);
    expect(usersLocalRepository.addUser).toHaveBeenCalledWith(userData);
  });
});
