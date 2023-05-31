import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';
@Injectable({
  providedIn: 'root',
})
export class GetExpenses {
  //expenses: Partial<Expense>[] = [];
  // error <html>TS2322: Type 'Partial<Expense>' is not assignable to type 'Expense[]'. Type 'Partial<Expense>' is not assignable to type 'Expense'. Types of property 'id' are incompatible. Type 'number | undefined' is not assignable to type 'number'. Type 'undefined' is not assignable to type 'number'.
  expenses: Array<Expense> = [];
  constructor(private expensesLocalRepository: ExpensesLocalRepository) {}

  async execute(): Promise<Expense[]> {
    this.expenses = await this.expensesLocalRepository.getAll();
    return this.expenses;
  }
}
