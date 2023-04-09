import { Injectable } from '@angular/core';
import { Expense } from '../domain/expense';
@Injectable({
  providedIn: 'root',
})
export class GetOrderedExpensesByRecent {
  constructor() {}

  execute(expenses: Expense[]): Expense[] {
    return this.quickSort(expenses);
  }

  private quickSort([x = [], ...xs]: any): Expense[] {
    return x.length === 0
      ? []
      : [
          ...this.quickSort(xs.filter((y: Expense) => y.date >= x.date)),
          x,
          ...this.quickSort(xs.filter((y: Expense) => y.date < x.date)),
        ];
  }
}
