import { GetUsers } from './get-users';
import { UsersLocalRepository } from '../infrastructure/users-local-repository';

const usersLocalRepository = new UsersLocalRepository();
const getUsers: GetUsers = new GetUsers(usersLocalRepository);


describe('GetExpenses', () => {
  beforeEach( () => {
    spyOn(usersLocalRepository, 'getAll').and.stub();
  });

  it('should return a list of users', () => {
    getUsers.execute();
    expect(usersLocalRepository.getAll).toHaveBeenCalled();
  });
});
