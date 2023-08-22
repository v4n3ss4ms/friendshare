import { User } from '../../users/domain/user';
import { Expense } from '../../expenses/domain/expense';
import { MonetaryValue } from '../../../core/money/monetary-value';
import { Currency } from '../../../core/money/currency';
import { UserWithBalance } from '../../users/domain/user-with-balance';

export class Balance {
  private constructor(private readonly users: User[], private readonly expenses: Expense[]) {}

  static create({ users, expenses }: { users: User[]; expenses: Expense[] }): Balance {
    return new Balance(users, expenses);
  }

  calculate(): UserWithBalance[] {
    const totalGroupExpenses = this.getTotalGroupExpenses(this.expenses);
    const usersCount = this.users.length;
    return this.users.map(user => {
      const totalUserExpenses = this.getTotalUserExpenses(this.expenses, user.id);
      return {
        user: user,
        balance: MonetaryValue.create({
          value: this.getUserBalance(totalGroupExpenses, totalUserExpenses, usersCount),
          currency: Currency.euro, // Hardcoded - Please check ReadMe notes
        }),
      };
    });
  }

  private getTotalGroupExpenses(expenses: Expense[]): number {
    const initialTotal: number = 0;
    return expenses.reduce((acc: number, expense: Expense) => acc + expense.amount.value, initialTotal);
  }

  private getTotalUserExpenses(expenses: Expense[], userId: number): number {
    const initialTotal: number = 0;
    return expenses
      .filter(expense => expense.userId === userId)
      .reduce((acc: number, expense: Expense) => acc + expense.amount.value, initialTotal);
  }

  private getUserBalance(totalGroupExpenses: number, totalUserExpenses: number, usersCount: number): number {
    const balance: number = totalUserExpenses - totalGroupExpenses / usersCount;
    return Math.round(balance * 100) / 100;
  }
}
