import { Expense } from './expense';

export interface ExpensesRepository {
  getAll(): Promise<Expense[]>;
  addExpense(expense: Expense): void;
}
