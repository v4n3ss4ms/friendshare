import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
import { ExpensesRepository } from '../domain/expenses.repository';
import { Currency } from '../../../core/money/currency';
import { MonetaryValue } from '../../../core/money/monetary-value';

@Injectable({
  providedIn: 'root',
})
export class ExpensesLocalRepository implements ExpensesRepository {
  private readonly data: Expense[] = [
    {
      id: 433,
      name: 'cena',
      amount: MonetaryValue.create({ value: 140, currency: Currency.euro }),
      date: 1680290914000,
      userId: 1,
    },
    {
      id: 65,
      name: 'patatas fritas',
      amount: MonetaryValue.create({ value: 6, currency: Currency.euro }),
      date: 1680802792290,
      userId: 11,
    },
    {
      id: 567,
      name: 'cine',
      amount: MonetaryValue.create({ value: 57, currency: Currency.euro }),
      date: 1680365052000,
      userId: 11,
    },
    {
      id: 51,
      name: 'aperitivo',
      amount: MonetaryValue.create({ value: 53.8, currency: Currency.euro }),
      date: 1679061634000,
      userId: 6,
    },
  ];

  async getAll(): Promise<Expense[]> {
    return this.data;
  }

  async addExpense(expense: Expense): Promise<void> {
    this.data.unshift(expense);
  }
}
