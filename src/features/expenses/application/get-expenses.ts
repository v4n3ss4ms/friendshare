import {Inject, Injectable} from '@angular/core';
import {Expense} from '../domain/expense';
import {EXPENSES_REPOSITORY} from "../../../app/app.module";
import {ExpensesRepository} from "../domain/expenses-repository";

@Injectable({
  providedIn: 'root',
})
export class GetExpenses {
  expenses: Array<Expense> = [];
  constructor(@Inject(EXPENSES_REPOSITORY) private expensesRepository: ExpensesRepository) {}

  async execute(): Promise<Expense[]> {
    return await this.expensesRepository.getAll();
  }
}
