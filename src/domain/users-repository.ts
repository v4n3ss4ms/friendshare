import { User } from './user';

export interface UsersRepository {
  getAll(): User[];
  addUser(user: User): void;
}
