import { Injectable } from '@angular/core';
import { Expense } from '../../expenses/domain/expense';
import { User } from '../domain/user';
import { Currency } from '../../core/domain/currency';
import { UserWithBalance } from '../domain/userWithBalance';

@Injectable({
  providedIn: 'root',
})
export class GetUsersWithBalance {
  constructor() {}
  usersWithBalance = [] as UserWithBalance[];
  usersCount = 0 as number;
  totalGroupExpenses = 0 as number;

  execute(expenses: Expense[], users: User[]): UserWithBalance[] {
    this.usersCount = users.length;
    this.totalGroupExpenses = this.getTotalGroupExpenses(expenses);
    this.usersWithBalance = users.map((user) => {
      const totalUserExpenses = this.getTotalUserExpenses(expenses, user.id);
      return {
        ...user,
        totalExpenses: totalUserExpenses,
        balance: this.getUserBalance(
          this.totalGroupExpenses,
          totalUserExpenses,
          this.usersCount
        ),
        currency: Currency.euro, // Hardcoded - Please check ReadMe notes
      };
    });
    return this.usersWithBalance;
  }
  private getTotalGroupExpenses(expenses: Expense[]): number {
    const initialTotal: number = 0;
    return expenses.reduce(
      (acc: number, expense: Expense) => acc + expense.amount,
      initialTotal
    );
  }

  private getTotalUserExpenses(expenses: Expense[], userId: number): number {
    const initialTotal: number = 0;
    return expenses
      .filter((expense) => expense.userId === userId)
      .reduce(
        (acc: number, expense: Expense) => acc + expense.amount,
        initialTotal
      );
  }

  private getUserBalance(
    totalGroupExpenses: number,
    totalUserExpenses: number,
    usersCount: number
  ): number {
    const balance: number = totalUserExpenses - totalGroupExpenses / usersCount;
    return Math.round(balance * 100) / 100;
  }
}
