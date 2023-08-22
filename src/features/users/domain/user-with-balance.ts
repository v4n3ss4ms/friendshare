import { User } from './user';
import { MonetaryValue } from '../../../core/money/monetary-value';

export interface UserWithBalance {
  user: User;
  balance: MonetaryValue; // TODO: Use balance
}
