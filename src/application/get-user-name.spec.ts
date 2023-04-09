import { GetUserName } from './get-user-name';
import { User } from '../domain/user';

const getUserName: GetUserName = new GetUserName();
const USER_ID = 18;
const WRONG_USER_ID = 567;
const userDataMocked: User[] = [
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

describe('GetUserName', () => {
  it('should return an user name', () => {
    const name: string = getUserName.execute(USER_ID, userDataMocked);
    expect(name).toBe('Cristina');
  });

  it('should return a non-exist user', () => {
    const name: string = getUserName.execute(WRONG_USER_ID, userDataMocked);
    expect(name).toBe('This user no longer exists');
  });
});
