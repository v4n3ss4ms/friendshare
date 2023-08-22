import { Inject, Injectable } from '@angular/core';
import { ExpensesRepository } from '../domain/expenses.repository';
import { Expense } from '../domain/expense';
import { EXPENSES_REPOSITORY } from './expenses.injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class AddExpenseCommand {
  constructor(@Inject(EXPENSES_REPOSITORY) private expensesRepository: ExpensesRepository) {}

  async execute(expense: Expense): Promise<void> {
    await this.expensesRepository.addExpense(expense);
  }
}
