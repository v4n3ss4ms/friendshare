import { Expense } from './expense';

export interface ExpensesRepository {
  findAll(): Expense[];
}
