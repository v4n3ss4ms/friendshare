import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';
@Injectable({
  providedIn: 'root',
})
export class GetExpenses {
  expenses: Array<Expense> = [];
  constructor(private expensesLocalRepository: ExpensesLocalRepository) {}

  async execute(): Promise<Expense[]> {
    this.expenses = await this.expensesLocalRepository.getAll();
    return this.expenses;
  }
}
