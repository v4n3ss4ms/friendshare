import { Injectable } from '@angular/core';
import { Expense } from '../../expenses/domain/expense';
import { User } from '../domain/user';
import { UserWithBalance } from '../domain/user-with-balance';
import { Balance } from '../../balances/domain/balance';

@Injectable({
  providedIn: 'root',
})
export class GetUsersWithBalanceQuery {
  execute(expenses: Expense[], users: User[]): UserWithBalance[] {
    return Balance.create({ users, expenses }).calculate();
  }
}
