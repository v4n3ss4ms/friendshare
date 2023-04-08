import { Component, Input } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../domain/user';
import { Currency } from '../../domain/currency';
import { UserWithBalance } from '../../domain/userWithBalance';

@Component({
  selector: 'app-balances-list',
  templateUrl: './balances-list.component.html',
  styleUrls: ['./balances-list.component.css'],
})
export class BalancesListComponent {
  @Input() expenses = [] as Expense[];
  @Input() users = [] as User[];
  usersWithBalance = [] as UserWithBalance[];

  ngOnInit(): void {
    const usersCount: number = this.users.length;
    const totalGroupExpenses: number = this.getTotalGroupExpenses(
      this.expenses
    );
    this.usersWithBalance = this.users.map((user) => {
      const totalUserExpenses = this.getTotalUserExpenses(
        this.expenses,
        user.id
      );
      return {
        ...user,
        totalExpenses: totalUserExpenses,
        balance: this.getUserBalance(
          totalGroupExpenses,
          totalUserExpenses,
          usersCount
        ),
        currency: Currency.euro, // Hardcoded - Please check ReadMe notes
      };
    });
  }

  getTotalGroupExpenses(expenses: Expense[]): number {
    const initialTotal: number = 0;
    return expenses.reduce(
      (acc: number, expense: Expense) => acc + expense.amount,
      initialTotal
    );
  }

  getTotalUserExpenses(expenses: Expense[], userId: number): number {
    const initialTotal: number = 0;
    return expenses
      .filter((expense) => expense.userId === userId)
      .reduce(
        (acc: number, expense: Expense) => acc + expense.amount,
        initialTotal
      );
  }

  getUserBalance(
    totalGroupExpenses: number,
    totalUserExpenses: number,
    usersCount: number
  ): number {
    const balance: number = totalUserExpenses - totalGroupExpenses / usersCount;
    return Math.round(balance * 100) / 100;
  }
}
