import { Expense } from './expense';

export interface ExpensesRepository {
  getAll(): Expense[];
  addExpense(expense: Expense): void;
}
