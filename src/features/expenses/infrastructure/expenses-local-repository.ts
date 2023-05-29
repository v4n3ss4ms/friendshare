import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesRepository } from '../domain/expenses-repository';
import { Currency } from '../../core/domain/currency';
@Injectable({
  providedIn: 'root',
})
export class ExpensesLocalRepository implements ExpensesRepository {
  data = [
    {
      id: 433,
      name: 'cena',
      amount: 140,
      currency: Currency.euro,
      date: 1680290914000,
      userId: 1,
    },
    {
      id: 65,
      name: 'patatas fritas',
      amount: 6,
      currency: Currency.euro,
      date: 1680802792290,
      userId: 11,
    },
    {
      id: 567,
      name: 'cine',
      amount: 57,
      currency: Currency.euro,
      date: 1680365052000,
      userId: 11,
    },
    {
      id: 51,
      name: 'aperitivo',
      amount: 53.8,
      currency: Currency.euro,
      date: 1679061634000,
      userId: 6,
    },
  ];
  getAll(): Expense[] {
    return this.data;
  }
  addExpense(expense: Expense): void {
    this.data.unshift(expense);
  }
}
