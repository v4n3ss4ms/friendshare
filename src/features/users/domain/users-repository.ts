import { User } from './user';

export interface UsersRepository {
  getAll(): Promise<User[]>
  addUser(user: User): void
}
