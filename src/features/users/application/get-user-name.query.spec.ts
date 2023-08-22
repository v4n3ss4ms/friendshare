import { GetUserNameQuery } from './get-user-name.query';
import { User } from '../domain/user';

const getUserName: GetUserNameQuery = new GetUserNameQuery();
const USER_ID = 18;
const WRONG_USER_ID = 567;
const usersDataMocked: User[] = [
  {
    id: 1,
    name: 'Alejandra',
  },
  {
    id: 2,
    name: 'Antonio',
  },
  {
    id: 18,
    name: 'Cristina',
  },
  {
    id: 27,
    name: 'Francisco',
  },
];

describe('GetUserNameQuery', () => {
  it('should return an user name', () => {
    const name: string = getUserName.execute(USER_ID, usersDataMocked);
    expect(name).toBe('Cristina');
  });

  it('should return a non-exist user', () => {
    const name: string = getUserName.execute(WRONG_USER_ID, usersDataMocked);
    expect(name).toBe('This user no longer exists');
  });
});
