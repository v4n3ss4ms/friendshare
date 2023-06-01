import {Inject, Injectable} from '@angular/core';
import {EXPENSES_REPOSITORY} from "../../../app/app.module";
import {ExpensesRepository} from "../domain/expenses-repository";
import { Expense } from '../domain/expense';

@Injectable({
  providedIn: 'root',
})
export class AddExpense {
  constructor(@Inject(EXPENSES_REPOSITORY) private expensesRepository: ExpensesRepository) {}

  execute(expense: Expense): void {
    this.expensesRepository.addExpense(expense);
  }
}
