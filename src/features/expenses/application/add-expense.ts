import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';
@Injectable({
  providedIn: 'root',
})
export class AddExpense {
  constructor(private expensesLocalRepository: ExpensesLocalRepository) {}

  execute(expense: Expense): void {
    this.expensesLocalRepository.addExpense(expense);
  }
}
