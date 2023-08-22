import { Inject, Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesRepository } from '../domain/expenses.repository';
import { EXPENSES_REPOSITORY } from './expenses.injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class GetExpensesQuery {
  constructor(@Inject(EXPENSES_REPOSITORY) private readonly expensesRepository: ExpensesRepository) {}

  async execute(): Promise<Expense[]> {
    return this.expensesRepository.getAll();
  }
}
