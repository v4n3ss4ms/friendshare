import { User } from './user';

export interface UserWithBalance extends User {
  totalExpenses: number;
  balance: number;
}
